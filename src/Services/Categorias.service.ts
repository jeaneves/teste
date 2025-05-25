import { buscaCategoria, insereCategoria,buscaCatIdNome, listaCategoria, alteraCategoria, deletaCategoria } from "../sql/Categorias.sql";
import { db } from "../utils/DB";


export async function Criacategoria(id: number, nome: string){
    const existe = await db.query(buscaCategoria,[id]);

    if (existe.rowCount! > 0 ){
        throw new Error('Categoria já cadastrada');
    }

    const categoria = await db.query(insereCategoria,[id,nome]);
    return categoria.rows[0];
}

export async function buscaCat(id:number, nome:string){
    if (!id && !nome){
       const categoria = await db.query(listaCategoria);
       return categoria.rows
    }
    
    const categoria = await db.query(buscaCatIdNome,[id||null,nome||null]);

    if (categoria.rowCount === 0){
        throw new Error("Categoria não encontrada");
    }

    return categoria.rows;
}

export async function alteraCat(id:number,nome:string){
    if (!id){
        throw new Error("Informe a categoria");
    }

    const categoria = await db.query(alteraCategoria,[id,nome]);
    return categoria.rows;
}

export async function deleteCategoria(id:number){
    if (!id){
        throw new Error("Informe a categoria");
    }

   const resultado = await db.query(deletaCategoria, [id]);

    if (resultado.rowCount === 0) {
        throw new Error("Categoria não encontrada ou já foi deletada.");
    }

    return { mensagem: "Categoria deletada com sucesso." };
}
