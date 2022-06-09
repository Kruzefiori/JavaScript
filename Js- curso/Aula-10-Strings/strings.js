        //    0123456789  -> cada letra está numa posição da s
let string = "O rato roeu a roupa do rei de roma."

console.log(string)
console.log(string.slice(-3))

console.log(string.slice(2 , 6))

console.log(string.slice(-5 , -1))

console.log(string.replace(/r/g, "%"))

console.log(string.search(/[r]/))

console.log(string.length)

console.log(string.split(" "))

console.log(string.toUpperCase())