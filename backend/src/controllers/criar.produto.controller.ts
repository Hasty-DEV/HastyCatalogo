// criarProdutoController.ts
import { Request, Response } from 'express';
import axios from 'axios';
import Produto from '../models/produtos.model'; // Certifique-se de ajustar o caminho conforme sua estrutura de projeto

async function criarProduto(req: Request, res: Response): Promise<void> {
  const novoProduto = req.body;

  if (!novoProduto || !novoProduto.title || !novoProduto.price || !novoProduto.category || !novoProduto.image) {
     res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
  }

  try {
 
    const produtoLocal = await Produto.create({
      title: novoProduto.title,
      price: novoProduto.price,
      category: novoProduto.category,
      image: novoProduto.image,
    });

 
    const response = await axios.post('https://fakestoreapi.com/products', novoProduto);
    const produtoCriado = response.data;
 
    res.status(201).json({ produtoLocal, produtoCriado });
  } catch (error) {
    console.error('Erro ao criar o produto:', error);
    res.status(500).json({ mensagem: 'Erro interno ao criar o produto.' });
  }
}

export default criarProduto;
