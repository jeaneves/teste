import dotenv from "dotenv";
import express from 'express';
import produtoRouter from './Routes/Produtos.routes'


dotenv.config();

const app = express();
app.use(express.json());

app.use('/produtos',produtoRouter)


app.listen(3000,()=>{
    console.log("Api porta 3000");
});