import { Router } from "express";
import CronometroController from "./../controller/Cronometro.controller.js";

const cronometro = Router();

cronometro.get("/", CronometroController.tempo);
cronometro.get("/iniciar", CronometroController.iniciar);
cronometro.get("/pausar", CronometroController.pausar);
cronometro.get("/continuar", CronometroController.continuar);
cronometro.get("/zerar", CronometroController.zerar);
cronometro.get("/marcar", CronometroController.marcarTempo);
cronometro.get("/marcadores", CronometroController.marcadores);

export default cronometro;