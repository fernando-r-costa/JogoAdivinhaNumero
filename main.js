const numeroSorteado = sorteia(0, 100)

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tentativa = document.getElementById("submit-tentativa");
const reiniciar = document.getElementById("submit-reiniciar");

function compara() {
    const chute = parseFloat(document.getElementById("input-chute").value)
    if (chute == numeroSorteado) {
        console.log("Parabéns vc acertou!!!");
    } else if (chute < numeroSorteado) {
        console.log("Você errou! O número é maior!");
    } else if (chute > numeroSorteado) {
        console.log("Você errou! O número é menor!");
    }
}

function reinicio() {
    window.location.reload();
}

console.log(numeroSorteado);
tentativa.onclick = compara;
reiniciar.onclick = reinicio;

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// const source = document.getElementById("source");
// const textContentOutput = document.getElementById("textContentOutput");
// const innerTextOutput = document.getElementById("innerTextOutput");

// textContentOutput.value = source.textContent;
// innerTextOutput.value = source.innerText;