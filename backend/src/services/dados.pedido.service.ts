// services/dados.do.banco.ts
import { Pedido } from '../models/pedidos.model';

class DadosDoBanco {
  static async obterPedidos(pedidoId: number): Promise<any | null> {
    try {
      // Buscar um pedido específico pelo ID
      const pedido = await Pedido.findByPk(pedidoId);

      if (!pedido) {
        console.error('Pedido não encontrado com o ID:', pedidoId);
        return null;
      }

      // Formatando o pedido
      const pedidoFormatado = this.formatarPedido(pedido);

      return pedidoFormatado;
    } catch (error) {
      console.error('Erro ao obter pedido do banco de dados:', error);
      throw error;
    }
  }

  private static formatarPedido(pedido: any): any {
    return {
      id: pedido.id,
      nomeCompleto: pedido.nomeCompleto,
      whatsapp: pedido.whatsapp,
      informacaoAdicional: pedido.informacaoAdicional,
      produto: pedido.produto,
      quantidade: pedido.quantidade,
      subtotal: pedido.subtotal,
      total: pedido.total,
      opcaoPagamento: pedido.opcaoPagamento,
      cep: pedido.cep,
      endereco: pedido.endereco,
      numero: pedido.numero,
      bairro: pedido.bairro,
      complemento: pedido.complemento,
      cidade: pedido.cidade,
      estado: pedido.estado,
      frete: pedido.frete,
      distribuidora: pedido.distribuidora,
      createdAt: this.formatarDataBrasilia(pedido.createdAt),
    };
  }

  private static formatarDataBrasilia(createdAt: any): string {
    const dataBrasilia = new Date(createdAt as string | number);
    const dia = String(dataBrasilia.getDate()).padStart(2, '0');
    const mes = String(dataBrasilia.getMonth() + 1).padStart(2, '0');
    const ano = dataBrasilia.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}

export default DadosDoBanco;