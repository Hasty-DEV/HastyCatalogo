// deletar.produto.controller.ts
import { Request, Response } from 'express';
import Produto from '../models/produtos.model';

async function deletarProduto(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  try {
    const produtoLocal = await Produto.findByPk(id);

    if (!produtoLocal) {
      res.status(404).json({ mensagem: 'Produto não encontrado.' });
      return;
    }

    // Desativa o produto no banco de dados local
    await produtoLocal.update({ ativo: false });
    res.status(204).json({ mensagem: 'Produto removido do catálogo com sucesso.' });
  } catch (error) {
    console.error('Erro ao desativar o produto:', error);
    res.status(500).json({ mensagem: 'Erro interno ao desativar o produto.' });
  }
}

export default deletarProduto;
