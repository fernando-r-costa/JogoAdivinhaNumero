let nomeJogador = prompt("INFORME O SEU NOME?");
const bemVindo = document.getElementById("bemvindo").innerText = `Seja bem vindo, ${nomeJogador}!`;

const numeroSorteado = sorteia(0, 100)

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tentativa = document.getElementById("submit-tentativa");
const reiniciar = document.getElementById("submit-reiniciar");
let textoTentativas = document.getElementById("p-numeroTentativas");
let numeroTentativas = 0;
let painel = document.getElementById("p-painel");

function compara() {
    if (numeroTentativas == 5) {
        infoTentativas(`FIM`);
        infoPainel(`${nomeJogador} as suas tentativas acabaram!`);
    } else if (numeroTentativas < 4) {
        const chute = parseInt(document.getElementById("input-chute").value)
        if (chute == numeroSorteado) {
            numeroTentativas = 5;
            infoTentativas(`FIM`);
            infoPainel(`Parabéns você acertou, ${nomeJogador}!!!`);
        } else if (chute < numeroSorteado) {
            numeroTentativas++;
            infoTentativas(`Tentativas feitas: ${numeroTentativas}.`);
            infoPainel(`Você errou! ${nomeJogador} o número é maior!`);
        } else if (chute > numeroSorteado) {
            numeroTentativas++;
            infoTentativas(`Tentativas feitas: ${numeroTentativas}.`);
            infoPainel(`Você errou! ${nomeJogador} o número é menor!`);
        }
    } else if (numeroTentativas = 4) {
        const chute = parseInt(document.getElementById("input-chute").value)
        if (chute == numeroSorteado) {
            numeroTentativas = 5;
            infoTentativas(`FIM`)
            infoPainel(`Parabéns você acertou, ${nomeJogador}!!!`);
        } else if (chute != numeroSorteado) {
            numeroTentativas++;
            infoTentativas(`FIM`)
            infoPainel(`${nomeJogador} acabou! Você não conseguiu acertar!
                                O número sorteado foi ${numeroSorteado}.`);
        }
    }
}

function infoTentativas(frase) {
    textoTentativas.innerText = frase;
}

function infoPainel(frase) {
    painel.innerText = frase;
}

function reinicio() {
    window.location.reload();
}

console.log(numeroSorteado);
tentativa.onclick = compara;
reiniciar.onclick = reinicio;