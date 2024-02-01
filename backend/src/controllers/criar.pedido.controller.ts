// controllers/criar.pedido.ts
import { Request, Response } from 'express';
import { Pedido } from '../models/pedidos.model';
import Produto from '../models/produtos.model';
import logger from '../config/logger';
import Estatisticas from '../models/estatisticas.model';
import { escolhaFrete } from './escolha.frete.controller';

class CriarPedido {
  static async criarPedido(req: Request, res: Response): Promise<number | void> {
    try {
      const {
        nomeCompleto,
        whatsapp,
        informacaoAdicional,
        produtoId,  
        subtotal,
        opcaoPagamento,
        endereco,
        numero,
        bairro,
        complemento,
        cidade,
        estado,
        quantidade,
      } = req.body;

      const { frete, distribuidora, cep } = await escolhaFrete(req, res);

      // Buscar o produto no banco de dados pelo id
      const produtoEncontrado = await Produto.findByPk(produtoId);

      if (!produtoEncontrado) {
        logger.error('Produto não encontrado:', { produtoId });
        res.status(404).json({ mensagem: 'Produto não encontrado' });
        return;
      }

      // Verificar se o produto está ativo
      if (!produtoEncontrado.ativo) {
        logger.warn('Produto não está ativo:', { produtoId });
        res.status(400).json({ mensagem: 'Produto não está ativo' });
        return;
      }

      // Buscar as estatísticas do produto
      const estatisticasProduto = await Estatisticas.findOne({ where: { produto_id: produtoEncontrado.id } });

      if (!estatisticasProduto) {
        logger.error('Estatísticas não encontradas para o produto:', { produtoId });
        res.status(500).json({ mensagem: 'Estatísticas não encontradas para o produto' });
        return;
      }

      // Verificar se a quantidade desejada é maior que o estoque
      if (quantidade > estatisticasProduto.estoque) {
        logger.warn('Estoque insuficiente para criar o pedido:', { produtoId, quantidade, estoque: estatisticasProduto.estoque });
        res.status(400).json({ mensagem: 'Estoque insuficiente para criar o pedido', estoqueAtual: estatisticasProduto.estoque });
        return;
      }

      // Criar um novo pedido
      const novoPedido = await Pedido.create({
        nomeCompleto,
        whatsapp,
        informacaoAdicional,
        produto: produtoEncontrado.title,
        subtotal,
        total: subtotal + frete,
        opcaoPagamento,
        cep,
        endereco,
        numero,
        bairro,
        complemento,
        cidade,
        estado,
        quantidade,
        produto_id: produtoEncontrado.id,
        frete,
        distribuidora
      });

      // Atualizar o estoque nas estatísticas
      await estatisticasProduto.update({
        estoque: estatisticasProduto.estoque - quantidade,
      });

      console.log('Pedido criado com sucesso:', { nomeCompleto });

      // Exportar o ID do pedido na resposta
      res.status(201).json({ mensagem: 'Pedido criado com sucesso', pedidoId: novoPedido.id });
      return novoPedido.id;
    } catch (error) {
      console.error('Erro ao criar pedido:', { error });
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }
}

export default CriarPedido;
