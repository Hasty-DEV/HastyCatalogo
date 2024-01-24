// criarProdutoController.ts
import { Request, Response } from 'express';
import Produto from '../models/produtos.model';
import logger from '../config/logger'; // Substitua pelo caminho correto
import Estatisticas from '../models/estatisticas.model'; // Importe o modelo Estatisticas

async function criarProduto(req: Request, res: Response): Promise<void> {
  const { title, price, category, image, estoque } = req.body;

  if (!title || !price || !category || !image || estoque === undefined) {
    logger.error('Todos os campos são obrigatórios, incluindo o estoque.');
    res.status(400).json({ mensagem: 'Todos os campos são obrigatórios, incluindo o estoque.' });
    return;
  }

  try {
    const produtoLocal = await Produto.create({
      title,
      price,
      category,
      image,
    });

    // Adicionar o produto na tabela de estatísticas com o estoque especificado
    await Estatisticas.create({
      produto_id: produtoLocal.id,
      visualizacoes: 0,
      estoque,
      carrinho: 0,
    });

    logger.info('Produto criado com sucesso:', { id: produtoLocal.id });
    res.status(201).json({ produtoLocal });
  } catch (error) {
    logger.error('Erro ao criar o produto:', error);
    res.status(500).json({ mensagem: 'Erro interno ao criar o produto.' });
  }
}

export default criarProduto;
