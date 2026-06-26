let num: number; 
let cont: number = 1;

console.log("Informe um número: ");
num = 7; //resposta do usuário
console.log(`Valor inserido: ${num}`);

    while (cont <= 10) {
        console.log (`${num} . ${cont} = ${num * cont}`);
        cont ++;//é o mesmo que cont = cont + 1 
       } 