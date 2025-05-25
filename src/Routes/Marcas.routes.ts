import { Router } from "express";
import * as MarcasController from '../Controllers/Marcas.controller'

const router = Router();

router.post('/criamarca',MarcasController.CriaMarca);
router.get('/buscamarca',MarcasController.buscaMarc);
router.put('/alteramarca',MarcasController.alteraMarc);
router.delete('/deletaMarca/:id',MarcasController.deleteMarcas);


export default router;