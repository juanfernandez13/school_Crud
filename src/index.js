import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 8080;

app.get('/', (req,res) => {
    return res.status(200).send({message:'Boas-vindas à API'})
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

export default app;