import express from 'express';
import { register } from '../controllers/register.controller';
import { login } from '../controllers/login.controller';
import CriarPedido from '../controllers/criar.pedido.controller';
import enviarpedido from '../controllers/enviar.pedido.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.post('/pedido', async (req, res) => {
  
    
    await CriarPedido.criarPedido(req, res);

     
    await enviarpedido.obterPedidos(req, res);
 
});

export default router;
