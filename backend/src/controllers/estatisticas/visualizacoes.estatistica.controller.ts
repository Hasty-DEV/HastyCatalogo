 
import { Request, Response } from 'express';
import Estatisticas from '../../models/estatisticas.model';

class VisualizacoesEstatisticaController {
  static async incrementVisualizacoes(req: Request, res: Response) {
    try {
 
      const produtoId = Number(req.params.produto_id);

    
      let estatistica = await Estatisticas.findOne({
        where: { produto_id: produtoId },  
      });
    
      if (!estatistica) {
        estatistica = await Estatisticas.create({
            produto_id: produtoId,
            visualizacoes: 1,
            estoque: 0,
          });
      } else {
   
        estatistica.visualizacoes += 1;
        await estatistica.save();
      }

      return res.status(200).json({ success: true, estatistica });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
}

export default VisualizacoesEstatisticaController;
