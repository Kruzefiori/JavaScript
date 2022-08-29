function criaPessoa(nome, sobrenome, idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }
}

const pessoa1 = criaPessoa('Victor' , 'Kruze', 22)

console.log(pessoa1)