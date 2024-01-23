// router.ts
import express from 'express';
import { register } from '../controllers/register.controller';
import { login } from '../controllers/login.controller';
import CriarPedido from '../controllers/criar.pedido.controller';
import enviarpedido from '../controllers/enviar.pedido.controller';
import criarProduto from '../controllers/criar.produto.controller';
import atualizarProduto from '../controllers/atualizar.produto.controller';
import deletarProduto from '../controllers/deletar.produto.controller'; // Importe o controlador de exclusão

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.post('/pedido', async (req, res) => { 
    await CriarPedido.criarPedido(req, res);
    await enviarpedido.obterPedidos(req, res);
});

router.post('/admin/criar-produto', criarProduto);
router.put('/admin/atualizar-produto/:id', atualizarProduto);
router.delete('/admin/deletar-produto/:id', deletarProduto); // Adicione a rota de exclusão

export default router;
