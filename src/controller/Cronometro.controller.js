import Cronometro from "./../model/Cronometro.model.js";

class CronometroController {
    // Retorna o estado atual do cronômetro
    tempo(req, res) {
        return res.status(200).json(Cronometro.informacoesCronometro());
    }
    // Inicia o cronômetro
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
    // Pausa o cronômetro
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
    // Zera o cronômetro
    zerar(req, res) {
        try {
            Cronometro.zerar();
            return res.status(200).json(Cronometro.informacoesCronometro());
        } catch (err) {
            return res.status(400).json({Message: err.message});
        }
        
    }
    // Marca o tempo atual
    marcarTempo(req, res) {
        try{
            const tempoMarcado = Cronometro.marcar();
            return res.status(200).json(tempoMarcado);
        } catch(erro) {
            res.status(400).json({Message: erro.message})
        }
    }
    // Retorna os tempos marcados
    marcadores(req, res) {
        return res.status(200).json({Marcadores: Cronometro.marcadores});
    }
}

export default new CronometroController();