let a: number[]= [10, 15, 23, 8, 7];

let somaImpares = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
        somaImpares += a[i];
    }
}

console.log("Soma dos elemntos ímpares:", somaImpares);