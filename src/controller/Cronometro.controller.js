import Cronometro from "./../model/Cronometro.model.js";

class CronometroController {
    tempo(req, res) {
        return res.status(200).json(Cronometro.informacoesCronometro());
    }

    iniciar(req, res) {
        try {
            return res.status(200).json({
                Tempo: Cronometro.toString(),
                situacao: Cronometro.play()
            });
        } catch(err){
            return res.status(400).json({Message: err.message});
        }
        
    };

    pausar(req, res) {
        try {
            return res.status(200).json({
            Tempo: Cronometro.toString(),
            situacao: Cronometro.pausar()
        });
        } catch (err) {
            return res.status(400).json({Message: err.message});
        }
        
    };

    zerar(req, res) {
        try {
            Cronometro.zerar();
            return res.status(200).json(Cronometro.informacoesCronometro());
        } catch (err) {
            return res.status(400).json({Message: err.message});
        }
        
    }
    
    marcarTempo(req, res) {
        try{
            const tempoMarcado = Cronometro.marcar();
            return res.status(200).json(tempoMarcado);
        } catch(erro) {
            res.status(400).json({Message: erro.message})
        }
    }

    marcadores(req, res) {
        return res.status(200).json({Marcadores: Cronometro.marcadores});
    }
}

export default new CronometroController();