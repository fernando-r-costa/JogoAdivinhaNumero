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
        textoTentativas.innerText = `FIM`
        painel.innerText = `As suas tentativas acabaram!`
    } else if (numeroTentativas < 4) {
        const chute = parseInt(document.getElementById("input-chute").value)
        if (chute == numeroSorteado) {
            numeroTentativas = 5;
            textoTentativas.innerText = `FIM`
            painel.innerText = `Parabéns você acertou!!!`
        } else if (chute < numeroSorteado) {
            numeroTentativas++;
            textoTentativas.innerText = `Tentativas feitas: ${numeroTentativas}`
            painel.innerText = `Você errou! O número é maior!`
        } else if (chute > numeroSorteado) {
            numeroTentativas++;
            textoTentativas.innerText = `Tentativas feitas: ${numeroTentativas}`
            painel.innerText = `Você errou! O número é menor!`
        }
    } else if (numeroTentativas = 4) {
        const chute = parseInt(document.getElementById("input-chute").value)
        if (chute == numeroSorteado) {
            numeroTentativas = 5;
            textoTentativas.innerText = `FIM`
            painel.innerText = `Parabéns você acertou!!!`
        } else if (chute != numeroSorteado) {
            numeroTentativas++;
            textoTentativas.innerText = `FIM`
            painel.innerText = `Acabou! Você não conseguiu acertar!
                                O número sorteado foi ${numeroSorteado}`
        }
    }
}


function reinicio() {
    window.location.reload();
}

console.log(numeroSorteado);
tentativa.onclick = compara;
reiniciar.onclick = reinicio;

// function mostra(frase) {
//     document.write(frase);
//     pulaLinha();
// }

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// const source = document.getElementById("source");
// const textContentOutput = document.getElementById("textContentOutput");
// const innerTextOutput = document.getElementById("innerTextOutput");

// textContentOutput.value = source.textContent;
// innerTextOutput.value = source.innerText;