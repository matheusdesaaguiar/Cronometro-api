[JAVASCRIPT__BADGE]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[EXPRESS__BADGE]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[NODEJS_BADGE]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white


<h1 align="center" style="font-weight: bold">Cronômetro API ⏱</h1>


<div align="center">

![javascript][JAVASCRIPT__BADGE]  ![nodejs][NODEJS_BADGE]  ![express][EXPRESS__BADGE]  

</div>

<p align="center">
    <a href="#started">Primeiros passos</a> • 
    <a href="#routes">API Endpoints</a> 
</p>

<p align="center">
    
    Em diversas situações do dia a dia, é útil e até necessário saber quanto tempo levamos para realizar determinada tarefa. Seja para bater um recorde pessoal, acompanhar a evolução de produtividade, ou simplesmente registrar o tempo decorrido em uma atividade, o controle preciso do tempo faz toda a diferença.
    Pensando nisso, esta API foi desenvolvida com o objetivo de facilitar o registro, o monitoramento e o gerenciamento de tempos cronometrados. Ela permite iniciar, pausar, retomar e finalizar contagens de tempo de forma simples e eficiente, tornando o processo totalmente automatizado e acessível para diferentes aplicações.
    Com essa solução, você deixa de depender de cronômetros manuais ou planilhas improvisadas e passa a contar com um sistema confiável e fácil de integrar ao seu fluxo de trabalho ou aplicação. Simples, prática e funcional — a API de cronômetro está aqui para registrar o seu tempo com precisão.

</p>

<h2 id="started">🚀 Primeiros passos</h2>

<h3>Pré-requesitos</h3>

- [NodeJS](https://nodejs.org)

<h3> Instalação de dependências </h3> 

```bash
npm i 
```
<h3> Iniciar servidor </h3>
O servidor está rodando como padrão na porta 3000

<h4>Com node</h4>

```bash
npm run start
```

<h4> Com nodemon</h4>

```bash
npm run dev
```

<h3>Cloning</h3>

```bash
git clone git@github.com:matheusdesaaguiar/Cronometro-api.git
```
<h2 id="routes">📍 API Endpoint <h2>

| rotas              | descrição                                         
|----------------------|-----------------------------------------------------
| <kbd>GET /cronometro</kbd>     | Mostra informações do cronômetro [ detalhes da resposta](#get-chronometer-detail)
| <kbd>GET /cronometro/play</kbd>     | Inicia o cronômetro e retorna de resposta o tempo em que ele está na hora que foi iniciado e a situação dele [detalhes da resposta](#get-play-detail)
| <kbd>GET /cronometro/pausar</kbd>     | Pausa o cronômetro e retorna de resposta o tempo que está pausado e a situação dele [detalhes da resposta](#get-pause-detail)
| <kbd>GET /cronometro/zerar</kbd>     | Zera o cronômetro e retorna de resposta as informações do cronômetro zerado [detalhes da resposta](#get-reset-detail)
| <kbd>GET /cronometro/marcar</kbd>     | Marca o tempo e retorna como resposta essa marcação [detalhes da resposta](#get-mark-detail)
| <kbd>GET /cronometro/marcardores</kbd>     | Retorna todos os marcadores de tempo ao ter iniciado o cronômetro [detalhes da resposta](#get-markers-detail)

<h3 id="get-chronometer-detail"> GET /cronometro </h3>

**RESPONSE**
```json
{
	"Tempo": "00:00:00.00",
	"situacao": "zerado",
    "marcadores": []
}
```

<h3 id="get-play-detail"> GET /cronometro/play </h3>

**RESPONSE**
```json
{
	"Tempo": "00:00:00.00",
	"situacao": "rodando"
}
```

<h3 id="get-pause-detail"> GET /cronometro/pausar </h3>

**RESPONSE**

```json
{
	"Tempo": "00:00:57.88",
	"situacao": "pausado"
}
```

<h3 id="get-reset-detail"> GET /cronometro/zerar </h3>

**RESPONSE**

```json
{
	"Tempo": "00:00:00.00",
	"situacao": "zerado",
	"marcadores": []
}
```

<h3 id="get-mark-detail"> GET /cronometro/marcar </h3>

**RESPONSE**

```json
{
	"Tempo": "00:00:05.58"
}
```

<h3 id="get-markers-detail"> GET /cronometro/marcadores </h3>

**RESPONSE**

```json
{
	"Marcadores": [
		{
			"Tempo": "00:00:02.88"
		},
		{
			"Tempo": "00:00:03.87"
		},
		{
			"Tempo": "00:00:04.75"
		},
		{
			"Tempo": "00:00:05.58"
		}
	]
}
```