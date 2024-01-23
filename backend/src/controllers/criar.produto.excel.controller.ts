import { Request, Response } from 'express';
import xlsx from 'xlsx';
import Produto from '../models/produtos.model';
import logger from '../config/logger';

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

      for (const row of excelData as Array<{ title: string; price: string; category: string; image: string }>) {
        // Validar e processar os dados da linha
        const novoProduto = {
          title: row.title,
          price: row.price,
          category: row.category,
          image: row.image,
        };

        await Produto.create(novoProduto);
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
