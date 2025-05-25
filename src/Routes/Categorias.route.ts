import { Router } from "express";
import * as CategoriaController from '../Controllers/Categorias.controller'

const router = Router();

router.post('/criacategoria',CategoriaController.Criacategoria);
router.get('/buscacategoria',CategoriaController.buscaCat);
router.put('/alteracategoria',CategoriaController.alteraCat);
router.delete('/deletacategoria/:id',CategoriaController.deleteCategoria);




export default router;