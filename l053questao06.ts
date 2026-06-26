let base = 3;
let exp = 4;
let res = 1;

for (let i = 1; i <= exp; i++) {
    res *= base;
}

console.log(`${base} elevado a ${exp} = ${res}`);