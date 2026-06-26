let cont: number = 0; //contador 
let acum: number = 0; //acumulador

do {


    acum = acum + cont; 
    cont = cont + 2;
} while (cont <= 500);

console.log(`A soma dos valores pares de 0 a 500 é ${acum}`);