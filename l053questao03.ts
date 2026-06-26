let numero;

console.log("Informe o número desejado.")
numero = 11;//numero escolhido pelo usuário
console.log(`Tabuada do número ${numero}.`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}