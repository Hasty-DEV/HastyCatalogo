import { Request, Response } from 'express';
import { Pedido } from '../models/pedidos.model';
import logger from '../config/logger';
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

      // Criar um novo pedido no banco de dados
      const novoPedido = await Pedido.create({
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