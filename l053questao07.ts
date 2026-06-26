let soma: number = 0;

for (let i= 3; i <= 21; i++) {
    if (i % 2 === 0 ) {
        soma += i;
    }
}

console.log(`A soma dos numeros pares de 3 a 21 é: ${soma}`)