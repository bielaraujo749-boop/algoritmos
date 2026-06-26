let nota1, nota2, nota3, nota4, media: number;

console.log("informe a primeira nota: ");
nota1 = 7.5;
console.log("informe a segunda nota: ");
nota2 = 6;
console.log("informe a terceira nota: ");
nota3 = 4;
console.log("informe a quarta nota: ");
nota4 = 10;

media = ( nota1 + nota2 + nota3 + nota4 ) / 4;

if (media >= 5) {
    console.log(`A sua média é ${media.toFixed(1)} e você está APROVADO`);
} else {
    console.log(`A sua média é ${media} e você está reprovado`);
}