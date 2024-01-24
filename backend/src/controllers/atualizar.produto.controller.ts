// atualizarProdutoController.ts
import { Request, Response } from 'express';
import Produto from '../models/produtos.model';
import logger from '../config/logger';
import Estatisticas from '../models/estatisticas.model';

async function atualizarProduto(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { title, price, category, image, estoque } = req.body;

  try {
    const produtoLocal = await Produto.findByPk(id);

    if (!produtoLocal) {
      logger.error('Produto não encontrado.');
      res.status(404).json({ mensagem: 'Produto não encontrado.' });
      return;
    }

    // Atualizar o estoque nas estatísticas se o estoque for fornecido
    if (estoque !== undefined) {
      // Buscar as estatísticas do produto
      const estatisticasProduto = await Estatisticas.findOne({ where: { produto_id: produtoLocal.id } });

      if (estatisticasProduto) {
        await estatisticasProduto.update({
          estoque: estoque,
        });
      } else {
        // Se não houver estatísticas, criar um novo registro
        await Estatisticas.create({
          produto_id: produtoLocal.id,
          visualizacoes: 0,
          estoque: estoque,
          carrinho: 0,
        });
      }

      // Ativar o produto se o estoque for maior que zero
      const novoStatusAtivo = estoque > 0;

      if (produtoLocal.ativo !== novoStatusAtivo) {
        await produtoLocal.update({
          ativo: novoStatusAtivo,
        });
      }
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
