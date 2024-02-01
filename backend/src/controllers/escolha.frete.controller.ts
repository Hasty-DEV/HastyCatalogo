import { Request, Response } from 'express';
import { calcularFrete } from '../services/calculo.frete.service';

interface OpcoesFrete {
  frete: number;
  distribuidora: string;
  cep: string;
}

export async function escolhaFrete(req: Request, res: Response): Promise<OpcoesFrete> {
  try {
    
    const { menorPreco, menorTempo, cep } = await calcularFrete(req);
    const escolha = req.body.escolha;

    if (escolha === 'menorPreco') {
      const [preco] = menorPreco.match(/\d+\.\d+/) || ['0'];
      const distribuidora = menorPreco.replace(/\d+\.\d+/, '').trim();
      return { frete: parseFloat(preco), distribuidora, cep };
    } else if (escolha === 'menorTempo') {
      const [preco] = menorTempo.match(/\d+\.\d+/) || ['0'];
      const distribuidora = menorTempo.replace(/\d+\.\d+/, '').trim();
      return { frete: parseFloat(preco), distribuidora, cep };
    } else {
      throw new Error('Escolha inválida. Use "menorPreco" ou "menorTempo".');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter opções de frete' });
    throw error; // Rejogue o erro para que possa ser tratado em criarPedido.ts
  }
}
