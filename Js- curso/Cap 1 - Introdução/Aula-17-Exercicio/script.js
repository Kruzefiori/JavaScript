//O escopo é definido dentro da função apenas impedindo o conflito com nome de variáveis, as variaveis só existem
//no escopo da função
function Escopo() {
    const forumlario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    var pessoas = [];
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = forumlario.querySelector('.nome');
        const sobrenome = forumlario.querySelector('.sobrenome');
        const peso = forumlario.querySelector('.peso');
        const altura = forumlario.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        resultado.innerHTML = '';
        console.log(pessoas)
        pessoas.sort(dynamicSort("-nome"))
        console.log(pessoas)
        for (var i = 0; i < pessoas.length; i++) {
            resultado.innerHTML += `<p> ${pessoas[i].nome}  ${pessoas[i].sobrenome}  ${pessoas[i].peso}  ${pessoas[i].altura}</p>`
        }

    }

    /**
        * Function to sort alphabetically an array of objects by some specific key.
        * 
        * @param {String} property Key of the object to sort.
        */
     function dynamicSort(property) {
        var sortOrder = 1;
    
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
    
        return function (a,b) {
            if(sortOrder == -1){
                return b[property].localeCompare(a[property]);
            }else{
                return a[property].localeCompare(b[property]);
            }        
        }
    }

    forumlario.addEventListener('submit', recebeEventoForm);
}
Escopo()