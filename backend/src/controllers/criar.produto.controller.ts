// criarProdutoController.ts
import { Request, Response } from 'express';
import Produto from '../models/produtos.model';
import logger from '../config/logger'; // Substitua pelo caminho correto

async function criarProduto(req: Request, res: Response): Promise<void> {
  const novoProduto = req.body;

  if (!novoProduto || !novoProduto.title || !novoProduto.price || !novoProduto.category || !novoProduto.image) {
    logger.error('Todos os campos são obrigatórios.');
    res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    return;
  }

  try {
    const produtoLocal = await Produto.create({
      title: novoProduto.title,
      price: novoProduto.price,
      category: novoProduto.category,
      image: novoProduto.image,
    });

    logger.info('Produto criado com sucesso:', { id: produtoLocal.id });
    res.status(201).json({ produtoLocal });
  } catch (error) {
    logger.error('Erro ao criar o produto:', error);
    res.status(500).json({ mensagem: 'Erro interno ao criar o produto.' });
  }
}

export default criarProduto;
