const numero = Number(prompt('Digite um número aqui:'));
const numeroTitulo = document.getElementById('numero_titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero
texto.innerHTML = `<p>Raiz quadrada do numero é ${numero ** 0.5}.</p>`;

texto.innerHTML += `<p>é NaN? ${Number.isNaN(numero)}.</p>`;

texto.innerHTML +=  `<p>Numero inteiro : ${Number.isInteger(numero)}</p>`;

texto.innerHTML +=  `<p>Arredondando para baixo= ${Math.floor(numero)}</p>`;

texto.innerHTML +=  `<p>Arredondando para cima= ${Math.ceil(numero)}</p>`;

texto.innerHTML +=  `<p>Com 2 casas decimais= ${numero.toFixed(2)}</p>`;

setTimeout(teste, 2000);
function teste(){
    window.location.reload
}
