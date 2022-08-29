const nome = "Victor Kruze Fiori"
const Ano = 2021
let idade = 21
let nasc
nasc = Ano - idade
let peso = 102
let alturaEmM = 1.86
let IMC
IMC = peso / (alturaEmM*alturaEmM);

console.log(nome, "tem", idade, "anos","nasceu em", nasc , ", pesa", peso,"Kg" , "tem", alturaEmM , "de altura e seu IMC é de :", IMC );

var  teste = prompt()


//template string >>>>>>>
console.log(`${nome} tem ${idade} anos nasceu em ${nasc} , pesa ${peso} Kg tem ${alturaEmM} de altura e seu IMC é de : ${IMC}` );