window.onload = function() {

	// Boas vindas
		var nomeUser = prompt('Seja bem vinda/bem vindo ao quiz de revisão!\n\nQual seu primeiro nome?')
		if(nomeUser != null || nomeUser != undefined || nomeUser != ""){
			switch (nomeUser) {
				case 'Alak':
				case 'alak':
					var sobrenomeUser = 'Guimarães'
					nomeUser = 'Alak' + ' ' + sobrenomeUser
					break;
				case 'Arthur':
				case 'arthur':
					var sobrenomeUser = 'Martins'
					nomeUser = 'Arthur' + ' ' + sobrenomeUser
					break;
				case 'Bianca':
				case 'bianca':
				case 'Bia':
				case 'bia':
					var sobrenomeUser = 'Pereira Silva'
					nomeUser = 'Bianca' + ' ' + sobrenomeUser
					break;
				case 'Davi':
				case 'davi':
					var sobrenomeUser = 'Seo'
					nomeUser = 'Davi' + ' ' + sobrenomeUser
					break;
				case 'Diogo':
				case 'diogo':
					var sobrenomeUser = 'da Costa'
					nomeUser = 'Diogo' + ' ' + sobrenomeUser
					break;
				case 'Ednei':
				case 'ednei':
				case 'França':
				case 'frança':
				case 'Franca':
				case 'franca':
					var sobrenomeUser = 'Pires'
					nomeUser = 'Ednei "França"' + ' ' + sobrenomeUser
					break;
				case 'Eduardo':
				case 'eduardo':
				case 'Edu':
				case 'edu':
					var sobrenomeUser = 'Miracca'
					nomeUser = 'Eduardo' + ' ' + sobrenomeUser
					break;
				case 'Fernando':
				case 'fernando':
				case 'Nando':
				case 'nando':
					var sobrenomeUser = 'Matallo'
					nomeUser = 'Fernando' + ' ' + sobrenomeUser
					break;
				case 'Irailton':
				case 'irailton':
				case 'Ira':
				case 'ira':
					var sobrenomeUser = 'Oliveira Reis'
					nomeUser = 'Irailton' + ' ' + sobrenomeUser
					break;
				case 'João':
				case 'joão':
				case 'João Vitor':
				case 'joão vitor':
				case 'Joao':
				case 'joao':
				case 'Joao Vitor':
				case 'joao vitor':
					var sobrenomeUser = 'Ricardi Oliveira'
					nomeUser = 'João Vitor' + ' ' + sobrenomeUser
					break;
				case 'Jorge':
				case 'jorge':
				case 'Djords':
				case 'djords':
					var sobrenomeUser = 'Neto'
					nomeUser = 'Jorge "Djords"' + ' ' + sobrenomeUser
					break;
				case 'Juliano':
				case 'juliano':
					var sobrenomeUser = 'Bezerra'
					nomeUser = 'Juliano' + ' ' + sobrenomeUser
					break;
				case 'Lais':
				case 'lais':
				case 'Laís':
				case 'laís':
					var sobrenomeUser = 'Muller'
					nomeUser = 'Lais' + ' ' + sobrenomeUser
					break;
				case 'Leonardo':
				case 'leonardo':
				case 'Leo':
				case 'leo':
				case 'Léo':
				case 'léo':
					var sobrenomeUser = 'da Silva'
					nomeUser = 'Leonardo' + ' ' + sobrenomeUser
					break;
				case 'Marcelo':
				case 'marcelo':
					var sobrenomeUser = prompt('Qual seu sobrenome?')
					nomeUser = 'Marcelo' + ' ' + sobrenomeUser
					break;
				case 'Maria':
				case 'maria':
				case 'Ciça':
				case 'ciça':
				case 'Cica':
				case 'cica':
					var sobrenomeUser = 'Junqueira'
					nomeUser = 'Ciça' + ' ' + sobrenomeUser
					break;
				case 'Mario':
				case 'mario':
				case 'Mário':
				case 'mário':
					var sobrenomeUser = 'Cataneo'
					nomeUser = 'Mario' + ' ' + sobrenomeUser
					break;
				case 'Patrick':
				case 'patrick':
					var sobrenomeUser = 'Reis'
					nomeUser = 'Patrick' + ' ' + sobrenomeUser
					break;
				case 'Paulo':
				case 'paulo':
					var sobrenomeUser = 'Martins'
					nomeUser = 'Paulo' + ' ' + sobrenomeUser
					break;
				case 'Poliana':
				case 'poliana':
				case 'Poli':
				case 'poli':
					var sobrenomeUser = 'Rodrigues Takisita'
					nomeUser = 'Poliana' + ' ' + sobrenomeUser
					break;
				case 'Raul':
				case 'raul':
					var sobrenomeUser = 'Santos'
					nomeUser = 'Raul' + ' ' + sobrenomeUser
					break;
				case 'Renato':
				case 'renato':
					var sobrenomeUser = 'Mareque'
					nomeUser = 'Renato' + ' ' + sobrenomeUser
					break;
				case 'Rodolfo':
				case 'rodolfo':
					var sobrenomeUser = 'Boas'
					nomeUser = 'Rodolfo' + ' ' + sobrenomeUser
					break;
				case 'Rodrigo':
				case 'rodrigo':
					var sobrenomeUser = 'Vilches'
					nomeUser = 'Rodrigo' + ' ' + sobrenomeUser
					break;
				case 'Sergio':
				case 'Sérgio':
				case 'sergio':
				case 'sérgio':
					var sobrenomeUser = 'da Silva'
					nomeUser = 'Sergio' + ' ' + sobrenomeUser
					break;
				case 'Val':
				case 'val':
				case 'Valburga':
				case 'valburga':
					var sobrenomeUser = 'Weigert Maier'
					nomeUser = 'Val' + ' ' + sobrenomeUser
					break;
				case 'Victor':
				case 'victor':
					var sobrenomeUser = 'Torres'
					nomeUser = 'Professor Victor' + ' ' + sobrenomeUser
					break;
				case 'Vinicius':
				case 'Vinícius':
				case 'vinicius':
				case 'vinícius':
				case 'vini':
				case 'Vini':
					var sobrenomeUser = 'Ribeiro dos Santos'
					nomeUser = 'Vinicius' + ' ' + sobrenomeUser
					break;
				case '':
					nomeUser = 'Anônimo'
					break;
				default:
					nomeUser = nomeUser
			}
		}
		nomeUser == null || nomeUser == undefined || nomeUser == '' || nomeUser == 'Anônimo' ? console.log('Olá,\n') : console.log("Salve, salve "+nomeUser + '!\n')
		console.log('Seja muito bem vindo(a) ao nosso quiz!\nAcompanhe seu placar em real time no console do DevTools!\n')
		console.log("%c  ", "background-image: url('https://is2-ssl.mzstatic.com/image/thumb/Purple4/v4/1e/17/4e/1e174e0f-6ce3-40ea-fb21-8b27326a5b9a/source/256x256bb.jpg'); background-repeat: no-repeat; background-size: 128px 128px; font-size: 128px")
	// Fim Boas vindas

	// Data formatada
		function dataAtualFormatada(){
		    var data = new Date()
		        dia  = data.getDate().toString().padStart(2, '0')
		        mes  = (data.getMonth()+1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
		        ano  = data.getFullYear();
		    return dia+"/"+mes+"/"+ano;
		}
	// Fim Data formatada

	// Aplicação do nome no placar de status
		var listaStatus = document.querySelector('#stats')
		var participanteContainer = document.createElement('small')
		participanteContainer.setAttribute('id','participante')
		participanteContainer.setAttribute('class', 'col-12')
		participanteContainer.style = 'margin:5px 0 -20px 0;'
		listaStatus.prepend(participanteContainer)
		var participante = document.createTextNode('Participante: ' + nomeUser + ' | Data: ' + dataAtualFormatada())
		participanteContainer.appendChild(participante)
	// Fim Aplicação do nome no placar de status

	// Timer
		var tempoAtual = 45
		var relogio = document.querySelector('#tempo')
		var timer = document.querySelector('#timer')
		var timerCount = setInterval(rodarTimer, 1000)
		function rodarTimer() {
			// pontosExibidos = pontosAtuais
			relogio.textContent = tempoAtual
			switch(tempoAtual){
				case 45:
					timer.style.color = 'lightgreen'
					tempoAtual--
					break;
				case 30:
					timer.style.color = 'yellow'
					tempoAtual--
					break;
				case 15:
					timer.style.color = 'orange'
					tempoAtual--
					break;
				case 5:
					timer.style.color = 'red'
					tempoAtual--
					break;
				case 0:
					alert('Você ganhou mais 45 segundos para responder a essa pergunta! Mas lembre-se que a cada novo tempo você perde 3 pontos do total')
					tempoAtual = 45
					pontosAtuais -= 3
					pontosExibidos.textContent = pontosAtuais
					console.log('Como precisou de mais tempo, agora seus pontos atuais são: '+pontosAtuais)
					if(pontosAtuais < 0) {
						pontuacaoScore.style.color = 'red'
					}
					break;
				default:
					tempoAtual--
			}
		}
	// Fim do Timer

	// Pontuação
		var pontuacaoScore = document.querySelector('#score')
		var pontosExibidos = document.querySelector('#pontuacao')
		var pontosAtuais = 0
		console.log('Pontos atuais: ' + pontosAtuais)
	// Fim da Pontuação

	// Perguntas (Placar)
		var perguntaAtual = document.getElementById("perguntaAtual")
		var aPergunta = 1
		// console.log(perguntaAtual)
		perguntaAtual.innerText = aPergunta
		var totalPerguntas = document.getElementById("totalPerguntas")
		var perguntasLength = document.getElementsByClassName("pergunta").length
		totalPerguntas.innerText = perguntasLength
	// Fim Perguntas (Placar)

	// Perguntas - Definição de Variáveis
		var perguntas = document.querySelectorAll(".pergunta")
		var perguntasDica = document.querySelectorAll(".dica")
		var perguntaTitulo = document.querySelectorAll(".pergunta h2")
		//console.log(perguntaTitulo[0].textContent)
	// Fim Perguntas - Definição de Variáveis

	// Controlador - Home
		var inicioBtn = document.querySelector("#btnReiniciar")
		inicioBtn.addEventListener('click', function(){
			location.reload()
		})
	// Fim Controlador - Home

	// Controlador - Dica
		var dicaBtn = document.querySelector("#btnMostrarDica")
		var dicaDaVez = document.getElementsByClassName("dica")[(aPergunta - 1)]
		dicaBtn.addEventListener('click', function(){
			if(dicaDaVez.style.opacity == 0){
				console.log("Primeira - e única - dica:\n"+dicaDaVez.textContent+"\n")
				dicaDaVez.style.opacity = 1
				dicaBtn.setAttribute('disabled', 'disabled')
				pontosAtuais -= 2
				pontosExibidos.textContent = pontosAtuais
				console.log('Como solicitou uma dica, agora seus pontos atuais são: '+pontosAtuais)
				if(pontosAtuais < 0) {
					pontuacaoScore.style.color = 'red'
				}
			} else {
				alert("Você já usou a dica que tinha nessa questão... :(")
				dicaDaVez.style.fontWeight = 'bolder'
				dicaBtn.setAttribute('disabled', 'disabled')
			}
		})
	// Fim Controlador - Dica

	// Controlador - Pausar
		var pausarBtn = document.querySelector("#btnPausar")
		var retomarBtn = document.querySelector("#btnRetomar")
		var vezesPausa = 0
		var vezesRetomada = 0
		var tempoPausado = tempoAtual
		pausarBtn.addEventListener('click', function(){
			vezesPausa++
			clearInterval(timerCount)
			tempoPausado = tempoAtual
			pausarBtn.setAttribute('class', 'oculto')
			retomarBtn.removeAttribute('class')
		})
		retomarBtn.addEventListener('click', function(){
			vezesRetomada++
			var timerReCount = setInterval(rodarTimer, 1000)
			pausarBtn.removeAttribute('class')
			retomarBtn.setAttribute('class', 'oculto')
			pausarBtn.addEventListener('click', function(){
				clearInterval(timerReCount)
				tempoPausado = tempoAtual
				pausarBtn.setAttribute('class', 'oculto')
				retomarBtn.removeAttribute('class')
			})
		})
	// Fim Controlador - Pausar

	// Controlador - Avançar
		var avancarBtn = document.querySelector("#btnAvancar")
		var avancar = function(){
			voltarBtn.removeAttribute('disabled')
			dicaBtn.removeAttribute('disabled')
			perguntas[(aPergunta - 1)].setAttribute('class', 'pergunta oculto')
			perguntas[aPergunta].removeAttribute('class')
			perguntas[aPergunta].setAttribute('class', 'pergunta')
			aPergunta++
			if((aPergunta) == perguntasLength){
				avancarBtn.setAttribute('disabled', 'disabled')
			}
			perguntaAtual.innerText = aPergunta
			tempoAtual = 45
			dicaDaVez = document.getElementsByClassName("dica")[(aPergunta - 1)]
		}
		avancarBtn.addEventListener('click', avancar)
	// Fim Controlador - Avançar

	// Controlador - Voltar
		var voltarBtn = document.querySelector("#btnVoltar")
		voltarBtn.setAttribute('disabled', 'disabled')
		var voltar = function(){
			avancarBtn.removeAttribute('disabled')
			// dicaBtn.removeAttribute('disabled')
			perguntas[(aPergunta - 1)].setAttribute('class', 'pergunta oculto')
			perguntas[(aPergunta - 2)].removeAttribute('class')
			perguntas[(aPergunta - 2)].setAttribute('class', 'pergunta')
			aPergunta--
			if((aPergunta) == 1){
				voltarBtn.setAttribute('disabled', 'disabled')
			}
			perguntaAtual.innerText = aPergunta
			tempoAtual = 45
			dicaDaVez = document.getElementsByClassName("dica")[(aPergunta - 1)]
		}
		voltarBtn.addEventListener('click', voltar)
	// Fim Controlador - Voltar

	// Perguntas e Respostas
		var perguntaDaVez = perguntas[(aPergunta - 1)]
		var enviar = document.querySelector("#enviar")
		enviar.addEventListener('click', function(){

			// AJUSTAR PARA CONGELAR PERGUNTAS SEGUINTES, HOJE SÓ CONGELA A PRIMEIRA
			var respostasDaVez = perguntaDaVez.querySelectorAll('input')
			for (i = 0; i < respostasDaVez.length; i++){
				respostasDaVez[i].setAttribute('disabled', 'disabled')
			}

			var i = aPergunta - 1
			let respostasCertas = document.getElementsByClassName("correta");
			let respostaCerta = respostasCertas[i]
			if( respostaCerta.checked == true ) {
				alert("Certa a resposta!!!")
				pontosAtuais += 10
				pontosExibidos.textContent = pontosAtuais
				if (aPergunta == perguntasLength) {
					console.log("Pontuação final: "+pontosAtuais)
					alert("Parabéns! Você finalizou esse quiz!")
				} else {
					console.log("Pontuação atual: "+pontosAtuais)
					avancar()
				};
			} else {
				alert("Ops... não foi dessa vez...\nA resposta correta era:\n"+respostaCerta.nextSibling.textContent+".")
				if (aPergunta == perguntasLength) {
					console.log("Pontuação final: "+pontosAtuais)
					alert("Por hoje é só! Você finalizou esse quiz!")
				} else {
					avancar()
				};
			}
		})
	// Fim Perguntas e Respostas

}