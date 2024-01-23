import { Request, Response } from 'express';
import { Pedido } from '../models/pedidos.model';
import logger from '../config/logger';
//import { calcularFrete } from '../services/calculo.frete.service';

class CriarPedido {
  static async criarPedido(req: Request, res: Response): Promise<void> {
    try {
      // Extrair os dados da requisição
      const {
        nomeCompleto,
        whatsapp,
        informacaoAdicional,
        produto,
        subtotal,
        entrega,
        total,
        opcaoPagamento,
        cep,
        endereco,
        numero,
        bairro,
        complemento,
        cidade,
        estado,
      } = req.body;

      // Calcular o frete usando a API dos Correios (dados de teste, sera peciso mudar de acordo com a loja ou o produto)
      //const freteInfo = await calcularFrete(cep, 1 , 1, 30, 8, 30);

      // Criar um novo pedido combinando informações do frete e da requisição
      const novoPedido = await Pedido.create({
        nomeCompleto,
        whatsapp,
        informacaoAdicional,
        produto,
        subtotal,
        entrega: entrega,//freteInfo.valor,
        total,
        opcaoPagamento,
        cep,
        endereco,
        numero,
        bairro,
        complemento,
        cidade,
        estado,
      });

      // Responder com o novo pedido criado
      logger.info('Pedido criado com sucesso:', { nomeCompleto });
      res.status(201).json({ mensagem: 'Pedido criado com sucesso', pedido: novoPedido });
    } catch (error) {
      logger.error('Erro ao criar pedido:', { error });
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }
}

export default CriarPedido;
