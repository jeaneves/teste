import dotenv from "dotenv";
import express from 'express';
import produtoRouter from './Routes/Produtos.routes'
import categoriaRouter from './Routes/Categorias.route'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/produtos',produtoRouter)
app.use('/categorias',categoriaRouter)



app.listen(PORT,()=>{
    console.log(`Api porta ${PORT}`);
});