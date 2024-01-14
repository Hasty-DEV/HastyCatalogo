
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import logger from '../config/logger';

export const login = async (req: Request, res: Response) => {
  const { cpf, password, companyPassword } = req.body;

  try {
    // Busca o usuário pelo CPF
    const user = await User.findOne({
      where: {
        cpf: cpf,
      },
    });

    // Verifica se o usuário existe e ambas as senhas estão corretas
    if (user && 
        (await bcrypt.compare(password, user.password)) &&
        (companyPassword === process.env.COMPANYPASS)
    ) {
      res.json({ message: 'Login bem-sucedido' });
    } else {
      logger.error('Credenciais inválidas');
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    logger.error('Erro ao realizar login', error);
    res.status(500).json({ error: 'Erro ao realizar login' });
  }
};
