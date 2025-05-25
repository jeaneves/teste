export const buscaCategoria = `select * 
                               from categorias 
                               where id = $1;`;

export const insereCategoria = `insert into categorias (id,nome) values ($1,$2) returning id,nome`;

export const buscaCatIdNome = `select * 
                               from categorias 
                               where (id =$1 or $1 is null)
                                 and (nome like $2 or $2 is null)`;

export const listaCategoria = `select * 
                               from categorias`;

export const alteraCategoria = `UPDATE categorias
                                SET nome = $2
                                WHERE id = $1`;

export const deletaCategoria = `delete categorias where id = $1`;