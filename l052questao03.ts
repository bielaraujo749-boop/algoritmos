let cont: number = 1; //contador 
let acum: number = 0; //acumulador

do {

    acum = acum + cont; //lógica de var acumulador
    cont++;

} while (cont <= 5);

console.log(`A soma do total dos cinco primeiros numeros é ${acum}`);