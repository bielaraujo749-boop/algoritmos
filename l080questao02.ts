let a:number [][]= [
    [1,2],
    [3,4],
    [5,6],

];

let soma = 0

for (let i: number = 0; i < 3; i++) {
    for (let j: number = 0; j < 2; j++){
        console.log(a[i][j]);
    soma+= a[i][j];
    }
    console.log();
}

console.log(`Soma da matriz: ${soma}`);