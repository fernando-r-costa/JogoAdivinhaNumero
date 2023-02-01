const numeroSorteado = sorteia(0, 100)

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const tentativa = document.getElementById("submit-tentativa");
  
  function compara() {
    const chute = parseFloat(document.getElementById("input-chute").value)
    if (chute == numeroSorteado) {
        console.log("Parabéns vc acertou!!!");
    } else {
        console.log("Você errou!");
    }    
}

console.log(numeroSorteado);
tentativa.onclick = compara;

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
// const source = document.getElementById("source");
// const textContentOutput = document.getElementById("textContentOutput");
// const innerTextOutput = document.getElementById("innerTextOutput");

// textContentOutput.value = source.textContent;
// innerTextOutput.value = source.innerText;