// controllers/enviar.pedido.controller.ts
import { Request, Response } from 'express';
import DadosDoBanco from '../services/dados.pedido.service';
import logger from '../config/logger';

class EnviarPedido {
  static async obterPedidos(req: Request, res: Response, pedidoId: number): Promise<void> {
    try {
      // Obter um pedido específico do banco de dados usando o pedidoId
      const pedido = await DadosDoBanco.obterPedidos(pedidoId);

      if (pedido) {
        // Criar mensagem formatada
        const mensagem =
          `Olá, ${process.env.NOMELOJA}, meu nome é ${pedido.nomeCompleto}\n` +
          `*Acabei de realizar o pedido abaixo:*\n\n` +
          `Nº do Pedido: ${pedido.id}\n\n` +
          `————————\n📜 *Itens:*\n\n` +
          `*${pedido.quantidade}x* ${pedido.produto}\n\n` +  
          `Observações do pedido: _${pedido.informacaoAdicional}_\n` +
          `————————\n\n` +
          `🛒 *Custo dos itens:* R$ ${pedido.subtotal}\n` +
          `🚚 *Custo do frete:* ${pedido.distribuidora} R$ ${pedido.frete}\n\n` +
          `✅ *Total do pedido:* R$ ${pedido.total}\n` +
          `💰 *Forma de pagamento:* ${pedido.opcaoPagamento}\n\n` +
          `🏠 *Endereço:* ${pedido.endereco}, ${pedido.numero} ${pedido.complemento ? pedido.complemento + ' ' : ''}${pedido.bairro}\n` +
          `🌍 *Cidade e Estado:* ${pedido.cidade} - ${pedido.estado}\n` +
          `${pedido.cep}\n\n` +
          `_Pedido feito em ${pedido.createdAt} às ${new Date().toLocaleTimeString()}h_`;
      
        const urlMensagem = encodeURIComponent(mensagem)
          .replace(/_/g, '%5F')  // Substituir '_' por '%5F'
          .replace(/%0A%0A/g, '%0A');
      
        const linkPedido = `https://api.whatsapp.com/send?phone=${process.env.WHATSAPP}&text=${urlMensagem}`;

        logger.info('Link do pedido obtido com sucesso: ' + linkPedido);
      } else {
        logger.error('Pedido não encontrado.');
        res.status(404).json({ mensagem: 'Pedido não encontrado' });
      }
    } catch (error) {
      logger.error('Erro ao obter pedidos do banco de dados:', error);
      console.error('Erro ao obter pedidos do banco de dados:', error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }
}

export default EnviarPedido;
