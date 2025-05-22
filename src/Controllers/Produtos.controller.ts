import * as produtoService from '../Services/Produtos.service';
import { Request,Response } from 'express';

export async function CriaProduto(req:Request,res:Response) {
    try {
        const produto = await produtoService.CriaProduto(req.body);
        res.status(200).json(produto)
        
    } catch (err:any) {
        res.status(400).json({message:err.message})
    }
};