import Cronometro from "./../model/Cronometro.model.js";

class CronometroController {
    tempo(req, res) {
        return res.json(Cronometro);
    }

    iniciar(req, res) {
        Cronometro.iniciarCronometro();
        return res.json(Cronometro);
    };

    pausar(req, res) {
        Cronometro.pausar();
        return res.json(Cronometro);
    };

    continuar(req, res) {
        Cronometro.continuar()
        return res.json(Cronometro);
    }

    zerar(req, res) {
        Cronometro.zerar();
        return res.json(Cronometro);
    }
    
    marcarTempo(req, res) {
        try{
            const tempoMarcado = Cronometro.marcar();
            console.log(tempoMarcado)
            return res.json(tempoMarcado);
        } catch(erro) {
            res.json({Message: erro.message})
        }
        
    }

    marcadores(req, res) {
        return res.json(Cronometro.marcadores);
    }
}

export default new CronometroController();