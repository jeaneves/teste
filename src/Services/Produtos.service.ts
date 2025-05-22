import { db } from "../utils/DB";
import { ProdutosInput } from "../Types/Produtos";
import { InsertProduto } from "../sql/Produtos.sql";

export async function CriaProduto(data:ProdutosInput) {
    const{ id,          
        nome,           
        descricao,      
        id_categoria,   
        valor,          
        perc_desc,      
        avaliacao,      
        estoque,        
        id_marca,       
        sku,            
        peso,           
        largura,        
        altura,         
        profundidade,   
        garantia,       
        envio,          
        disponibilidade,
        pol_devolucao,  
        qtd_min,        
        dt_criacao,     
        dt_atualizado,  
        barcode,        
        qr_code,        
        thumbnail,      
    } = data;

    const produto = await db.query(InsertProduto,[ id
                                                 , nome
                                                 , descricao
                                                 , id_categoria
                                                 , valor
                                                 , perc_desc
                                                 , avaliacao
                                                 , estoque
                                                 , id_marca
                                                 , sku
                                                 , peso
                                                 , largura
                                                 , altura
                                                 , profundidade
                                                 , garantia
                                                 , envio
                                                 , disponibilidade
                                                 , pol_devolucao
                                                 , qtd_min
                                                 , dt_criacao
                                                 , dt_atualizado
                                                 , barcode
                                                 , qr_code
                                                 , thumbnail]
    )
    return produto.rows[0];      
    
    
}