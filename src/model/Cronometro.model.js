import { situacaoCronometroENUM } from "./../utils/situacaoCronometro.js";
// Model da classe Tempo 
class Tempo {
    //constructor da classe Tempo com os atributos horas, minutos, segundo, milisegundos
    constructor(horas, minutos, segundos, milisegundos) {
        this.horas = horas
        this.minutos = minutos;
        this.segundos = segundos;
        this.milisegundos = milisegundos;
    }
}

// Model da classe Cronometro
class Cronometro extends Tempo{
    //os atributos da classe Cronometro com encapsulamento
    #situacao
    #marcadores
    #intervaldisparado
    // construtor da classe chamando o constructor de Tempo e com os atributos marcadores, situacao, intervalDisparado
    constructor(horas, minutos, segundos, milisegundos) {
        super(horas, minutos, segundos, milisegundos);
        this.marcadores = [];
        this.situacao = situacaoCronometroENUM.zerado;
        this.intervalDisparado = false;
    }

    // Get do atributo marcadores
    get marcadores() {
        return this.#marcadores
    }
    // Set do atributo marcadores
    set marcadores(marcadores) {
        this.#marcadores = marcadores;
    }
    // Get do atributo situacao
    get situacao() {
        return this.#situacao;
    }
    // Set do atributo situacao
    set situacao(situacao) {
        this.#situacao = situacao;
    }
    // Get do atributo intervalDisparado
    get intervalDisparado() {
        return this.#intervaldisparado;
    }
    // Set do atributo intervalDisparado
    set intervalDisparado(intervalDisparado) {
        this.#intervaldisparado = intervalDisparado;
    }
    // Método que reseta os marcadores
    resetarMarcadores() {
        this.marcadores = [];
    }
    // Método que retorna as informações do cronômetro
    informacoesCronometro() {
        return {
            Tempo: this.toString(),
            situacao: this.situacao,
            marcadores: this.marcadores
        };
    }
    // Método para marcar tempo
    marcar() {
        if(this.situacao === situacaoCronometroENUM.zerado) {
            throw new Error("Inicie o cronometro primeiro, para poder marcar o tempo!");
        }
        const tempo = {Tempo: this.toString()};
        const ultimoMarcador = this.marcadores[this.marcadores.length - 1];

        if (ultimoMarcador && ultimoMarcador.Tempo === tempo.Tempo) {
            throw new Error("Tempo já marcado");
        }
        
        this.marcadores.push(tempo);
        return tempo;
    }
    // Método para dar play e rodar o cronômetro
    play() {
        if(this.situacao === situacaoCronometroENUM.rodando) {
            throw new Error("O cronometro ja esta rodando!");
        }
        this.situacao = situacaoCronometroENUM.rodando;
        this.resetarMarcadores();
        if(!this.intervalDisparado) {
            setInterval(() => {
                if(this.situacao != situacaoCronometroENUM.pausado && this.situacao != situacaoCronometroENUM.zerado) {
                    if(this.milisegundos === 99) {
                        this.milisegundos = 0;
                        if(this.segundos === 59) {
                            this.segundos = 0;
                            if(this.minutos === 59) {
                                this.minutos = 0;
                                this.horas++;
                            }
                            else {
                                this.minutos++;
                            }
                        } else {
                            this.segundos++;
                        }
                    } else {
                        this.milisegundos++;
                    }
                }
            }, 10);
            this.intervalDisparado = true;
        }
        return this.situacao
    }
    // Método para pausar o cronômetro
    pausar() {
        if(this.#situacao === situacaoCronometroENUM.zerado) {
            throw new Error("O cronometro não foi iniciado ");
        }
        if(this.situacao === situacaoCronometroENUM.pausado) {
            throw new Error("O cronometro ja esta pausado")
        }
        this.situacao = situacaoCronometroENUM.pausado;
        return this.situacao
    }
    // Método para zerar o cronômetro
    zerar() {
        if(this.#situacao === situacaoCronometroENUM.zerado) {
            throw new Error("Inicie o cronometro primeiro!");
        }

        this.situacao = situacaoCronometroENUM.zerado;
        this.horas = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.milisegundos = 0;
    }
    // Metodo toString, onde retornamos o tempo do cronômetro
    toString() {
        const format = (num) => String(num).padStart(2, "0");
        return `${format(this.horas)}:${format(this.minutos)}:${format(this.segundos)}.${format(this.milisegundos)}`;
    }
}

export default new Cronometro(0,0,0, 0);