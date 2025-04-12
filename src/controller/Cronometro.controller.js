import Cronometro from "./../model/cronometro.model.js";

class CronometroController {
    tempo(req, res) {
        return res.send(Cronometro.tempoAtual);
    }

    iniciar(req, res) {
        Cronometro.iniciarCronometro();
        return res.send(`Cronômetro iniciado!`);
    };

    pausar(req, res) {
        Cronometro.rodando = false;
        return res.send("Cronômetro pausado!");
    };

    continuar(req, res) {
        Cronometro.rodando = true;
        return res.send("Cronômetro continuando!");
    }

    zerar(req, res) {
        Cronometro.minutos = 0;
        Cronometro.segundos = 0;
        return res.send("Cronômetro zerado!");
    }
}

export default new CronometroController();