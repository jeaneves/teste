import { Request, Response } from "express";
import * as CategoriasService from '../Services/Categorias.service'


export async function Criacategoria(req:Request, res:Response) {
    try {
        const categoria = await CategoriasService.Criacategoria(req.body.id, req.body.nome);
        res.status(200).json(categoria);
    } catch (err: any) { 
        res.status(400).json({mensagem:err.message});
    }
}

export async function buscaCat(req:Request,res:Response){
    try{
        const categoria = await CategoriasService.buscaCat(req.body.id,req.body.nome);
        res.status(200).json(categoria);
    } catch(err: any){
        res.status(400).json({mensagem:err.message});
    }
}

export async function alteraCat(req:Request,res:Response){
    try{
        //const id = parseInt(req.params.id)
        //console.log(id);
        const categoria = await CategoriasService.alteraCat(req.body.id,req.body.nome);
        res.status(200).json({mensagem:'Categoria alterada com sucesso'});
    } catch(err: any){
        res.status(400).json({mensagem:err.message});
    }
}

export async function deleteCategoria(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        await CategoriasService.deleteCategoria(id);
        res.json({mensagem: 'Categoria deletada com sucesso'});
    } catch (error) {
        res.status(404).json({mensagem: 'Categoria não encontrada'});
        
    }
}