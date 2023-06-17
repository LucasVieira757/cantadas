// Array de cantadas
const pickupLines = [
    "Você acredita em amor à primeira vista ou devo passar por aqui mais uma vez?",
    "Você é um gato? Porque eu estou ronronando por você.",
    "Se você fosse um botão de reiniciar, eu te apertaria o dia todo.",
    "Eu não sou fotógrafo, mas posso te imaginar juntos.",
    "Eu não sou um gênio, mas posso realizar seus três desejos.",
    "Seu nome deve ser Google, porque você tem tudo o que estou procurando."
  ];
  
  // Selecionar elementos do DOM
  const pickupLineDisplay = document.getElementById("pickupLine");
  const generateButton = document.getElementById("generateButton");
  const copyButton = document.getElementById("copyButton");
  
  // Gerar cantada aleatória
  function generatePickupLine() {
    const randomIndex = Math.floor(Math.random() * pickupLines.length);
    const randomPickupLine = pickupLines[randomIndex];
    pickupLineDisplay.innerText = randomPickupLine;
  }
  
  // Copiar cantada
  function copyPickupLine() {
    const textToCopy = pickupLineDisplay.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Cantada copiada!");
      })
      .catch((error) => {
        console.error("Erro ao copiar a cantada:", error);
      });
  }
  
  // Adicionar event listeners aos botões
  generateButton.addEventListener("click", generatePickupLine);
  copyButton.addEventListener("click", copyPickupLine);
  