// CriarProdutoExcelController.ts
import { Request, Response } from 'express';
import xlsx from 'xlsx';
import Produto from '../models/produtos.model';
import logger from '../config/logger';
import Estatisticas from '../models/estatisticas.model'; // Importe o modelo Estatisticas

class CriarProdutoExcelController {
  static async criarProdutoExcel(req: Request, res: Response): Promise<void> {
    try {
      // Certifique-se de que o campo 'excel' está presente na requisição
      if (!req.file) {
        logger.error('Nenhum arquivo Excel enviado.');
        res.status(400).json({ mensagem: 'Nenhum arquivo Excel enviado.' });
        return;
      }

      const excelFile = req.file as Express.Multer.File; // Garantir que excelFile seja do tipo Express.Multer.File
      const workbook = xlsx.read(excelFile.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const excelData = xlsx.utils.sheet_to_json(sheet);

      for (const row of excelData as Array<{ title: string; price: string; category: string | string[]; image: string; estoque: number }>) {
        // Validar e processar os dados da linha
        const novoProduto = {
          title: row.title,
          price: row.price,
          category: typeof row.category === 'string' ? row.category.split(',').map(cat => cat.trim()) : row.category,
          image: row.image,
        };

        const produtoCriado = await Produto.create(novoProduto);

        // Adicionar o produto na tabela de estatísticas com o estoque especificado
        await Estatisticas.create({
          produto_id: produtoCriado.id,
          visualizacoes: 0,
          estoque: row.estoque,
          carrinho: 0,
        });
      }

      logger.info('Produtos criados com sucesso a partir do arquivo Excel.');
      res.status(200).json({ mensagem: 'Produtos criados com sucesso.' });
    } catch (error) {
      logger.error('Erro ao processar o arquivo Excel:', error);
      res.status(500).json({ mensagem: 'Erro interno ao processar o arquivo Excel.' });
    }
  }
}

export default CriarProdutoExcelController;
