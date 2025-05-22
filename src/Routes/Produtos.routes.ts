import { Router } from "express";
import * as produtoController from '../Controllers/Produtos.controller'


const router = Router();

router.post('/criaproduto',produtoController.CriaProduto);

export default router;