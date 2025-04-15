class Tempo {
    constructor(horas, minutos, segundos, milisegundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
        this.milisegundos = milisegundos;
    }
}

class Cronometro extends Tempo{
    #marcadores
    constructor(horas, minutos, segundos, milisegundos) {
        super(horas, minutos, segundos, milisegundos);
        this.#marcadores = [];
        this.situacao = "pausado";
        this.setIntervalDisparado = false;
    }

    get tempoAtual() {
        return `Tempo atual do cronômetro: ${this.minutos.toString().padStart(2,"0")} minutos e ${this.segundos.toString().padStart(2, "0")} segundos.`;
    }

    iniciarCronometro() {
        this.situacao = "rodando";
        this.#marcadores = [];
        if(!this.setIntervalDisparado) {
            setInterval(() => {
                if(this.situacao === "rodando") {
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
            }, 0.1);
            this.setIntervalDisparado = true;
        }
    }

    pausar() {
        this.situacao = "pausado";
    }

    continuar() {
        this.situacao = "rodando";
    }

    zerar() {
        this.situacao = "pausado";
        this.horas = 0;
        this.minutos = 0;
        this.segundos = 0;
        this.milisegundos = 0;
    }

    marcar() {
        if(this.horas === 0 && this.minutos === 0 && this.segundos === 0 && this.milisegundos === 0) {
            throw new Error("O cronometro está zerado!");
        }
        
        const tempo = new Tempo(this.horas, this.minutos, this.segundos, this.milisegundos);
        this.#marcadores.push(tempo);
        return tempo;
    }

    get marcadores() {
        if(!this.#marcadores) {
            throw new Error("Ainda não foi marcado nenhum tempo!");
        }
        return this.#marcadores
    }
}

export default new Cronometro(0,0,0, 0);