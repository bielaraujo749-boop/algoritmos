let num: number; 
let cont: number = 1;

console.log("Informe um número: ");
num = 9; //resposta do usuário
console.log(`Valor inserido: ${num}`);

    do {
        console.log (`${num} . ${cont} = ${num * cont}`);
        cont ++;//é o mesmo que cont = cont + 1 
    }  while (cont <= 10)

   