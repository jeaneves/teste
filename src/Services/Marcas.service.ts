import { buscaMarca, insereMarca,buscaMarcIdNome, listaMarcas, alteraMarca, deletaMarca } from "../sql/Marcas.sql";
import { db } from "../utils/DB";


export async function CriaMarca(id: number, nome: string){
    const existe = await db.query(buscaMarca,[id]);

    if (existe.rowCount! > 0 ){
        throw new Error('Marcas já cadastrada');
    }

    const Marcas = await db.query(insereMarca,[id,nome]);
    return Marcas.rows[0];
}

export async function buscaMarc(id:number, nome:string){
    if (!id && !nome){
       const Marcas = await db.query(listaMarcas);
       return Marcas.rows
    }
    
    const Marcas = await db.query(buscaMarcIdNome,[id||null,nome||null]);

    if (Marcas.rowCount === 0){
        throw new Error("Marcas não encontrada");
    }

    return Marcas.rows;
}

export async function alteraMarc(id:number,nome:string){
    if (!id){
        throw new Error("Informe a Marcas");
    }

    const Marcas = await db.query(alteraMarca,[id,nome]);
    return Marcas.rows;
}

export async function deleteMarca(id:number){
    if (!id){
        throw new Error("Informe a Marcas");
    }

   const resultado = await db.query(deletaMarca, [id]);

    if (resultado.rowCount === 0) {
        throw new Error("Marcas não encontrada ou já foi deletada.");
    }

    return { mensagem: "Marcas deletada com sucesso." };
}
