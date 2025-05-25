import { Request, Response } from "express";
import * as MarcasService from '../Services/Marcas.service'


export async function CriaMarca(req:Request, res:Response) {
    try {
        const Marcas = await MarcasService.CriaMarca(req.body.id, req.body.nome);
        res.status(200).json(Marcas);
    } catch (err: any) { 
        res.status(400).json({mensagem:err.message});
    }
}

export async function buscaMarc(req:Request,res:Response){
    try{
        const Marcas = await MarcasService.buscaMarc(req.body.id,req.body.nome);
        res.status(200).json(Marcas);
    } catch(err: any){
        res.status(400).json({mensagem:err.message});
    }
}

export async function alteraMarc(req:Request,res:Response){
    try{
        const Marcas = await MarcasService.alteraMarc(req.body.id,req.body.nome);
        res.status(200).json({mensagem:'Marcas alterada com sucesso'});
    } catch(err: any){
        res.status(400).json({mensagem:err.message});
    }
}

export async function deleteMarcas(req: Request, res: Response) {
    try {
        const id = parseInt(req.params.id);
        await MarcasService.deleteMarca(id);
        res.json({mensagem: 'Marcas deletada com sucesso'});
    } catch (error) {
        res.status(404).json({mensagem: 'Marcas não encontrada'});
        
    }
}