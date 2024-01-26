import express from 'express';
import { register } from '../controllers/register.controller';
import { login } from '../controllers/login.controller';
import verifyToken from '../middlewares/token.verify.middleware'; // Importe o middleware de verificação de token
import CriarPedido from '../controllers/criar.pedido.controller';
import enviarpedido from '../controllers/enviar.pedido.controller';
import criarProduto from '../controllers/criar.produto.controller';
import atualizarProduto from '../controllers/atualizar.produto.controller';
import deletarProduto from '../controllers/deletar.produto.controller';
import CriarProdutoExcelController from '../controllers/criar.produto.excel.controller';
import VisualizacoesEstatisticaController from '../controllers/estatisticas/visualizacoes.estatistica.controller';
import AdicionarCarrinhoController from '../controllers/adicionar.carrinho.controller';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/adicionarcarrinho/:produtoId', AdicionarCarrinhoController.adicionarProduto);

// Rotas protegidas pelo middleware de verificação de token (para administradores)
router.use('/admin', verifyToken);

router.post('/admin/pedido', async (req, res) => {
    await CriarPedido.criarPedido(req, res);
    await enviarpedido.obterPedidos(req, res);
});

router.post('/admin/criar-produto', criarProduto);
router.put('/admin/atualizar-produto/:id', atualizarProduto);
router.delete('/admin/deletar-produto/:id', deletarProduto);
router.post('/admin/upload-excel', CriarProdutoExcelController.criarProdutoExcel);

router.get('/produtos/:produto_id/visualizacoes', VisualizacoesEstatisticaController.incrementVisualizacoes);

export default router;
