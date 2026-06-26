let num: number = 10; // Global

function teste(): void {
    let num2: number = 5; // Local
    let resultado: number = num + num2;
    console.log(`Resultado: ${resultado}`);
}

function outroTeste() : number {
    let num3 = 20;
    let resultado: number = num + num3;
    return resultado;
}

let resOutroTeste: number = outroTeste();

function teste3(x: number): void {
    console.log(`Argumento: ${x}`);
}

teste();
outroTeste();
teste3(resOutroTeste);
