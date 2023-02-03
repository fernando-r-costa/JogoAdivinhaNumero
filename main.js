const numeroSorteado = sorteia(0, 100)

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tentativa = document.getElementById("submit-tentativa");
const reiniciar = document.getElementById("submit-reiniciar");
let numeroTentativas = document.getElementById("input-numeroTentativas");

//adicionar if para condicionar a quantidade de tentativas

function compara() {
    if (numeroTentativas.value == 5) {
        console.log("As suas tentativas acabaram!");
    } else {
        const chute = parseInt(document.getElementById("input-chute").value)
        if (chute == numeroSorteado) {
            console.log("Parabéns vc acertou!!!");
            numeroTentativas.value = 5;
            console.log(numeroTentativas);
        } else if (chute < numeroSorteado) {
            console.log("Você errou! O número é maior!");
            numeroTentativas.value++;
            console.log(numeroTentativas);
        } else if (chute > numeroSorteado) {
            console.log("Você errou! O número é menor!");
            numeroTentativas.value++;
            console.log(numeroTentativas);
        } else if (numeroTentativas.value = 5) {
            console.log("Acabou suas tentativas!!!");
        }
    }
}


function reinicio() {
    window.location.reload();
}

console.log(numeroSorteado);
console.log(numeroTentativas);
tentativa.onclick = compara;
reiniciar.onclick = reinicio;

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// const source = document.getElementById("source");
// const textContentOutput = document.getElementById("textContentOutput");
// const innerTextOutput = document.getElementById("innerTextOutput");

// textContentOutput.value = source.textContent;
// innerTextOutput.value = source.innerText;