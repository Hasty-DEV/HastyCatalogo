// atualizarProdutoController.ts
import { Request, Response } from 'express';
import axios from 'axios';
import Produto from '../models/produtos.model';

async function atualizarProduto(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { title, price, category, image } = req.body;

  try {
    const produtoLocal = await Produto.findByPk(id);

    if (!produtoLocal) {
      res.status(404).json({ mensagem: 'Produto não encontrado.' });
      return;
    }

    // Atualiza os dados no banco de dados local
    await produtoLocal.update({
      title: title || produtoLocal.title,
      price: price || produtoLocal.price,
      category: category || produtoLocal.category,
      image: image || produtoLocal.image,
    });

    // Atualiza os dados na FakeStore API
    const response = await axios.put(`https://fakestoreapi.com/products/${id}`, {
      title: title || produtoLocal.title,
      price: price || produtoLocal.price,
      category: category || produtoLocal.category,
      image: image || produtoLocal.image,
    });

    const produtoAtualizado = response.data;

    res.status(200).json({ produtoLocal, produtoAtualizado });
  } catch (error) {
    console.error('Erro ao atualizar o produto:', error);
    res.status(500).json({ mensagem: 'Erro interno ao atualizar o produto.' });
  }
}

export default atualizarProduto;
