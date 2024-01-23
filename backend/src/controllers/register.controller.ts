import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import logger from '../config/logger';

export const register = async (req: Request, res: Response) => {
  const { fullName, cpf, password, companyPassword, role } = req.body;
 


  try {
    if (companyPassword !== process.env.COMPANYPASS) {
      logger.error('Senha da empresa incorreta para o usuário:', { cpf });
      return res.status(401).json({ error: 'Senha da empresa incorreta' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      cpf,
      password: hashedPassword,
      companyPassword,
      role,
    });
    logger.info('Usuário registrado com sucesso:', { cpf });
    res.json(user);
  } catch (error) {
    logger.error('Erro ao registrar usuário', { error });
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};
