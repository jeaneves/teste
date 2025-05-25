import dotenv from "dotenv";
import express from 'express';
import produtoRouter from './Routes/Produtos.routes'
import categoriaRouter from './Routes/Categorias.route'
import marcaRouter from './Routes/Marcas.routes'


dotenv.config();
const PORT = process.env.PORT || 3000

const app = express();
app.use(express.json());

app.use('/produtos',produtoRouter)
app.use('/categorias',categoriaRouter)
app.use('/marcas',marcaRouter)



app.listen(PORT,()=>{
    console.log(`Api porta ${PORT}`);
});