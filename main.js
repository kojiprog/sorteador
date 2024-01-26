function sortear() {
  const numeroInicial = document.querySelector(".numero__inicial").value;
  const numeroFinal = document.querySelector(".numero__final").value;
  const min = Math.ceil(parseInt(numeroInicial));
  const max = Math.floor(parseInt(numeroFinal));
  const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

  const mostrarResultado = (document.querySelector(
    ".numero__resultado"
  ).innerHTML = resultado);
}
