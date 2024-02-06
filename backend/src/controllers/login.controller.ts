// backend/controllers/loginController.ts

import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import Token from '../models/token.model';  
import logger from '../config/logger';

export const login = async (req: Request, res: Response) => {
  const { userEmail, userPassword } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email: userEmail,
      },
    });

    if (user && (await bcrypt.compare(userPassword, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.SECRET!, {
        expiresIn: '7d', 
      });

      try {
        // Tente inserir o token no banco de dados
        await Token.create({
          user_id: user.id,
          token,
        });

        logger.info('Login bem-sucedido para o usuário:', { userEmail });

        // Enviar tanto o id quanto o token na resposta
        res.json({ id: user.id, token });
      } catch (error) {
        logger.error('Erro ao inserir token no banco de dados', { error });
        res.status(500).json({ error: 'Erro ao realizar login. Tente novamente mais tarde.' });
      }
    } else {
      logger.error('Credenciais inválidas para o usuário:', { userEmail });
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    logger.error('Erro ao realizar login' + error );
    res.status(500).json({ error: 'Erro ao realizar login. Tente novamente mais tarde.' + error });
  }
};
