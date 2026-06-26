let num: number;
let div4: number; // vou testar nesta var se num é divisível por 4
let div5: number;

//Perguntar um valor númerico inteiro
num = 16// é uma resposta que o usuario deu

div4 = num %4; //recebe o *resto* da divisão de num por 4
div5 = num %5; //""""""""""""""""""""""""""""""""""""""""

//console.log(`div4 = ${div4} \ndiv5 = ${div5}`); 

if (div4 === 0 && div5 === 0) {
    console.log(`${num} é divisível por 4 e 5`)
} else {
   console.log(`${num} doesnt is divisível por 4 e 5`)
}