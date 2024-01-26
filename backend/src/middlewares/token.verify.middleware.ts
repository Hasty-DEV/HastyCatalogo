// backend/middleware/verifyToken.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Token from '../models/token.model'; // Importe o modelo da tabela de tokens
import logger from '../config/logger'; // Importe o logger

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const { token, id } = req.body;

  // Verifica se o token e o ID foram fornecidos na solicitação
  if (!token || !id) {
    logger.error('Token e ID não fornecidos');
    return res.status(401).json({ message: 'Token e ID não fornecidos' });
  }

  try {
    // Verifique se o token é válido e decodifique-o usando a chave secreta (process.env.SECRET)
    const decoded: any = jwt.verify(token, process.env.SECRET!);

    // Verifica se o ID no corpo da solicitação corresponde ao ID decodificado do token
    if (id != decoded.id) {
      logger.error('Token e ID não correspondem');
      return res.status(401).json({ message: 'Token e ID não correspondem' });
    }

    // Consulte o token mais recente na tabela de tokens para o usuário
    const latestToken = await Token.findOne({
      where: { user_id: decoded.id },
      order: [['createdAt', 'DESC']],
    });

    // Verifica se o token mais recente foi encontrado no banco de dados
    if (!latestToken) {
      logger.error('Token não encontrado no banco de dados');
      return res.status(401).json({ message: 'Token não encontrado no banco de dados' });
    }

    // Verifica se o token no corpo da solicitação é igual ao token mais recente armazenado no banco de dados
    if (token !== latestToken.token) {
      logger.error('Token inválido');
      return res.status(401).json({ message: 'Token inválido' });
    }

    // Verifique a data de criação do token
    const tokenCreationDate = latestToken.createdAt;
    const currentDate = new Date();

    // Verifica se o token tem mais de 7 dias (expirou)
    const tokenAgeInDays = Math.floor((currentDate.getTime() - tokenCreationDate.getTime()) / (1000 * 60 * 60 * 24));
    if (tokenAgeInDays > 7) {
      logger.error('Token expirado');
      return res.status(401).json({ message: 'Token expirado' });
    }

    // Se todas as verificações forem bem-sucedidas, continue com a próxima função de middleware ou rota
    logger.info('Token verificado com sucesso');
    next();
  } catch (error) {
    // Em caso de qualquer erro, retorne um status 401 (não autorizado) com uma mensagem
    logger.error('Erro ao verificar o token:', error);
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default verifyToken;
