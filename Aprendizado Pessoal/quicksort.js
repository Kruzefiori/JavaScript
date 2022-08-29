function qs(vet){
    quickSort(vet, 0, vet.length - 1);
}

function quickSort(vet, ini, fim){
    var i = ini;
    var f = fim;
    var m = Math.floor((i + f)/2);

    while(i < f)
    {
        while(vet[i] < vet[m])
            i++;

        while(vet[f] > vet[m])
            f--;

        if(i <= f)
        {
            var temp = vet[i];
            vet[i] = vet[f];
            vet[f] = temp;
            i++;
            f--;
        }
    }

    if(f > ini)
        quickSort(vet, ini, f);

    if(i < fim)
        quickSort(vet, i, fim);
}

var vetor = [9 , 8 , 2, 444, 231, 32131, 56354 ,414131,231321 ,32131, 132131 , 13, 55 , 12]

qs(vetor)
console.log(vetor)