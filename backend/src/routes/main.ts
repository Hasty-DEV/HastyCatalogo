// main.ts

import express from 'express';
import { register } from '../controllers/register.controller'; // Atualize o caminho conforme necessário

const router = express.Router();

 
 
router.post('/register', register);

export default router;
