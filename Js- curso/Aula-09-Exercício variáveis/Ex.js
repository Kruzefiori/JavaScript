let varA = "A"
let varB = "B"      // Nesse exercicio cada valor deve apontar para o seu próximo A = B // B = C // C = A
let varC = "C"

console.log(varA , varB , varC)

let aux = varA

varA = varB
varB = varC
varC = aux

console.log(varA , varB , varC)