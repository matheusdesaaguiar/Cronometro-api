// importação do Router do express
import { Router } from "express";

// importação do CronometroController para o routes 
import CronometroController from "./../controller/Cronometro.controller.js";

// Instânciação do Router para usá-lo
const cronometro = Router();

// Rota principal do cronômetro, onde podemos ver as informações do cronômetro
cronometro.get("/", CronometroController.tempo);

// Rota para dar o play ou comecar o cronômetro
cronometro.get("/play", CronometroController.iniciar);

// Rota para pausar o cronômetro 
cronometro.get("/pausar", CronometroController.pausar);

// Rota para zerar o cronômetro 
cronometro.get("/zerar", CronometroController.zerar);

// Rota para marcar o tempo do cronômetro 
cronometro.get("/marcar", CronometroController.marcarTempo);

// Rota para mostrar todas as marcações do cronômetro
cronometro.get("/marcadores", CronometroController.marcadores);

// exportação da constante cronometro como padrão e com todas as suas rotas
export default cronometro;