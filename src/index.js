// importação do pacote express
import express from "express";
// importação das rotas criadas
import cronometro from "./routes/cronometro.routes.js";
import cors from "cors";

const cors_config = {origin: "*"}

// instânciação do express
const app = express();

app.use(cors(cors_config));
// Caminho do servidor
app.use("/cronometro", cronometro);

// Declarando a constante onde porta onde a api está rodando
const PORT = 3000;

// Inicia o servidor na porta especificada e mostra uma mensagem no terminal
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});