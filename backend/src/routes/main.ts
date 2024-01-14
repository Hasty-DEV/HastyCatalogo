import express from 'express';
import { register } from '../controllers/register.controller'; // Atualize o caminho conforme necessário
import { login } from '../controllers/login.controller';

const router = express.Router();

router.post('/register', register);

router.post('/login', login)

export default router;
