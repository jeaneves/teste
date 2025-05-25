export const buscaMarca = `select * 
                               from marcas 
                               where id = $1;`;

export const insereMarca = `insert into marcas (id,nome) values ($1,$2) returning id,nome`;

export const buscaMarcIdNome = `select * 
                               from marcas 
                               where (id =$1 or $1 is null)
                                 and (nome like $2 or $2 is null)`;

export const listaMarcas = `select * 
                               from marcas`;

export const alteraMarca = `UPDATE marcas
                                SET nome = $2
                                WHERE id = $1`;

export const deletaMarca = `delete marcas where id = $1`;