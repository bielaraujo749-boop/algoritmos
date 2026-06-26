let cont: number = 2; //contador 
let acum: number = 0; //acumulador

while (cont <= 500){
    acum = acum + cont; //lógica de var acumulador
    cont = cont + 2;
}

console.log(`A soma dos valores pares de 0 a 500 é ${acum}`);