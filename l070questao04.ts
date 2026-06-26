let a: number[]=  [2, 4, 6, 7, 8, 12, 14, 16]
let b: number[]= [];

for ( let i = 0; i < a.length; i++){
    b[i] = a[i] * 3;
}

for (let i=0; i <b.length; i++){
    console.log(`b [${i + 1}] = ${a[i]} * 3 =${b[i]}`);

}