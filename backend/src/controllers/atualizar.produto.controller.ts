// atualizarProdutoController.ts
import { Request, Response } from 'express';
import Produto from '../models/produtos.model';
import logger from '../config/logger';

async function atualizarProduto(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, price, category, image } = req.body;
  
    try {
      const produtoLocal = await Produto.findByPk(id);
  
      if (!produtoLocal) {
        logger.error('Produto não encontrado.');
        res.status(404).json({ mensagem: 'Produto não encontrado.' });
        return;
      }
  
      await produtoLocal.update({
        title: title || produtoLocal.title,
        price: price || produtoLocal.price,
        category: category || produtoLocal.category,
        image: image || produtoLocal.image,
      });
  
      logger.info('Produto atualizado com sucesso:', { id });
      res.status(200).json({ produtoLocal });
    } catch (error) {
      logger.error('Erro ao atualizar o produto:', error);
      console.error('Erro ao atualizar o produto:', error);
      res.status(500).json({ mensagem: 'Erro interno ao atualizar o produto.' });
    }
  }
  
  export default atualizarProduto;
  
