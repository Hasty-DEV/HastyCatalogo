// controllers/dados.do.banco.controller.ts
import { Request, Response } from 'express';
import DadosDoBanco from '../services/dados.pedido.services';
import dotenv from 'dotenv';
import logger from '../config/logger';
class EnviarPedido {
  static async obterPedidos(req: Request, res: Response): Promise<void> {
    try {
      // Obter todos os pedidos do banco de dados
      const pedidos = await DadosDoBanco.obterPedidos();

      // Criar mensagem formatada
      const mensagensPedidos = pedidos.map((pedido) => {
        const mensagem =
          `Olá, ${process.env.NOMELOJA}, meu nome é ${pedido.nomeCompleto}\n` +
          `*Acabei de realizar o pedido abaixo:*\n\n` +
          `Nº do Pedido: ${pedido.id}\n\n` +
          `————————\n📜 *Itens:*\n\n` +
          `*1x* ${pedido.produto}\n\n` +
          `Observações do pedido: _${pedido.informacaoAdicional}_\n` +
          `————————\n\n` +
          `🛒 *Custo dos itens:* R$ ${pedido.subtotal}\n` +
          `🚚 *Custo do frete:* Correios Sedex (Melhor Envio) (6 a 7 dias úteis) R$ ${pedido.entrega}\n\n` +
          `✅ *Total do pedido:* R$ ${pedido.total}\n` +
          `💰 *Forma de pagamento:* ${pedido.opcaoPagamento}\n\n` +
          `🏠 *Endereço:* ${pedido.endereco}, ${pedido.numero} ${pedido.complemento ? pedido.complemento + ' ' : ''}${pedido.bairro}\n` +
          `🌍 *Cidade e Estado:* ${pedido.cidade} - ${pedido.estado}\n` +
          `${pedido.cep}\n\n` +
          `_Pedido feito em ${pedido.createdAt} às ${new Date().toLocaleTimeString()}h_`;

          const urlMensagem = encodeURIComponent(mensagem)
          .replace(/_/g, '%5F')  // Substituir '_' por '%5F'
          .replace(/%0A%0A/g, '%0A');

        return `https://api.whatsapp.com/send?phone=${process.env.WHATSAPP}&text=${urlMensagem}`;
      });

      if (mensagensPedidos.length > 0) {
        const primeiroLink = mensagensPedidos[0];

        logger.info('Primeiro link de pedido obtido com sucesso:', { link: primeiroLink });

        // Restante do código...
      } else {
        logger.error('Nenhum pedido encontrado.');
        res.status(404).json({ mensagem: 'Nenhum pedido encontrado' });
      }
    } catch (error) {
      logger.error('Erro ao obter pedidos do banco de dados:', error);
      console.error('Erro ao obter pedidos do banco de dados:', error);
      res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
  }
}

export default EnviarPedido;
