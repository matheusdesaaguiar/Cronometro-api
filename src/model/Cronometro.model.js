class Cronometro{
    constructor() {
        this.minutos = 0;
        this.segundos = 0;
        this.marcadores = [];
        this.rodando = false;
        this.setIntervalDisparado = false;
    }

    iniciarCronometro() {
        rodando = true;
        if(!this.setIntervalDisparado) {
            setInterval(() => {
                if(rodando) {
                    if(segundos === 59) {
                        segundos = 0;
                        minutos++;
                    } else {
                        segundos++;
                    }
                }
            }, 1000);
            this.setIntervalDisparado = true;
        }
    }

    get tempoAtual() {
        return `Tempo atual do cronômetro: ${this.minutos.toString().padStart(2,"0")} minutos e ${this.segundos.toString().padStart(2, "0")} segundos.`;
    }
}

export default new Cronometro();