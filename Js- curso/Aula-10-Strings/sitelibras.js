define([
        '../Aula-07-Operadores Aritméticos/Aritmético'
],(ari)=>{
        function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
        }
        
        function mostraScore() {
                alert(`O seu score atual é:  ${score}`)
                
        }
        
        function funcao(letra1, letra2) {
                let letra = prompt("digite qual letra é essa:")
                if (letra == letra1 || letra == letra2) {
                        streak++
                        if (streak > 2) {
                                score = score + streak
                        }
                        score += getRandomInt(1, 10)
                        alert('Resposta certa! \nSeu score é:' + score)
                }
        
                else {
                        streak = 0
                        score -= getRandomInt(2, 8)
                        alert("Resposta Errada! Essa é a letra " + letra1 + '\nSeu score é: ' + score)
                }
        }

}
)
let score = 0
let streak = 0

