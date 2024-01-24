// services/dados.do.banco.ts
import { Pedido } from '../models/pedidos.model';

class DadosDoBanco {
  static async obterPedidos(): Promise<any[]> {
    try {
      // Obter todos os pedidos do banco de dados
      const pedidos = await Pedido.findAll();

      // Mapear os pedidos para o formato desejado
      const pedidosFormatados = pedidos.map((pedido) => {
        return {
          id: pedido.id,
          nomeCompleto: pedido.nomeCompleto,
          whatsapp: pedido.whatsapp,
          informacaoAdicional: pedido.informacaoAdicional,
          produto: pedido.produto,
          quantidade: pedido.quantidade,  // Inclua a quantidade
          subtotal: pedido.subtotal,  
          entrega: pedido.entrega,  
          total: pedido.total,
          opcaoPagamento: pedido.opcaoPagamento,
          cep: pedido.cep,
          endereco: pedido.endereco,
          numero: pedido.numero,
          bairro: pedido.bairro,
          complemento: pedido.complemento,
          cidade: pedido.cidade,
          estado: pedido.estado,
          createdAt: DadosDoBanco.formatarDataBrasilia(pedido.createdAt),
        };
      });

      return pedidosFormatados;
    } catch (error) {
      console.error('Erro ao obter pedidos do banco de dados:', error);
      throw error;
    }
  }

  static formatarDataBrasilia(createdAt: any): string {
    const dataBrasilia = new Date(createdAt as string | number); // Ajuste aqui
    const dia = String(dataBrasilia.getDate()).padStart(2, '0');
    const mes = String(dataBrasilia.getMonth() + 1).padStart(2, '0');
    const ano = dataBrasilia.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }
}

export default DadosDoBanco;
