// AdicionarCarrinhoController.ts
import { Request, Response } from 'express';
import Estatisticas from '../models/estatisticas.model';
import Produto from '../models/produtos.model'; // Importe o modelo Produto

class AdicionarCarrinhoController {
  static async adicionarProduto(req: Request, res: Response): Promise<void> {
    try {
      const { produtoId } = req.params; // Extrair produtoId dos parâmetros da solicitação
      const { quantidade } = req.body;

      // Buscar as estatísticas do produto
      const estatisticasProduto = await Estatisticas.findOne({ where: { produto_id: produtoId } });

      if (!estatisticasProduto) {
        console.error('Estatísticas não encontradas para o produto:', { produtoId });
        res.status(500).json({ mensagem: 'Estatísticas não encontradas para o produto' });
        return;
      }

      // Verificar se a quantidade desejada é maior que o estoque
      const produto = await Produto.findByPk(produtoId);

      if (!produto) {
        console.error('Produto não encontrado:', { produtoId });
        res.status(404).json({ mensagem: 'Produto não encontrado' });
        return;
      }

      if (quantidade > estatisticasProduto.estoque) {
        console.warn('Estoque insuficiente para adicionar produto ao carrinho:', { produtoId, quantidade, estoque: estatisticasProduto.estoque });
        res.status(400).json({ mensagem: 'Estoque insuficiente para adicionar produto ao carrinho', estoqueAtual: estatisticasProduto.estoque });
        return;
      }

      // Incrementar o carrinho apenas se a quantidade for válida
      await Estatisticas.increment('carrinho', {
        by: 1,
        where: { produto_id: produtoId },
      });

      // Exemplo de resposta
      res.json({ mensagem: 'Produto adicionado ao carrinho com sucesso!' });
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }
}

export default AdicionarCarrinhoController;
