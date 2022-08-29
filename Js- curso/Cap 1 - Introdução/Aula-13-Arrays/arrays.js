let lista = [ ' Victor' , ' João' , ' Leonardo' ];
console.log("Lista inicial: " + lista);
lista.push(' Matheus')//adiciona no ultimo
console.log("Lista Com Matheus: " + lista);
console.log('Remove Ultimo:' + lista.pop())//remove o ultimo da lista
lista.unshift(' Matheus')//adiciona no começo
console.log("Lista Com Matheus: " + lista);
lista.sort()//ordem alfabética
console.log('Lista em ordem alfabética'+lista)
lista.shift()//retira o primeiro
console.log('Lista sem o primeiro' + lista)
console.log(typeof lista)
console.log(lista instanceof Array)
lista = 123
console.log(typeof lista)
console.log(lista instanceof Array)
