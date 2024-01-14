import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.model';
import logger from '../config/logger';

export const register = async (req: Request, res: Response) => {
  const { fullName, cpf, password, companyPassword, role } = req.body;

  const empresaSenha = 'senha_da_sua_empresa';

  try {
    if (companyPassword !== empresaSenha) {
      logger.error('Senha da empresa incorreta');
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

    res.json(user);
  } catch (error) {
    logger.error('Erro ao registrar usuário', error);
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
};
