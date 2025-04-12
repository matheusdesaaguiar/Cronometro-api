import express from "express";
import cronometro from "./routes/cronometro.routes.js";

const app = express();

app.use("/cronometro", cronometro);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});