let cont: number = 1; //contador 
let acum: number = 0; //acumulador

while (cont <= 100){
    acum = acum + cont; //lógica de var acumulador
    cont = cont + 1;
}

console.log(`A soma dos valores de 1 a 100 é ${acum}`);