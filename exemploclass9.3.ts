class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(): void {
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`);
    }

}

let carro1 = new Carro ("Mitsubishi", "Lancer Evo X", 2007);
carro1.exibirDetalhes();
console.log()
let carro2 = new Carro ("Mitsubishi", "eclipse", 1989);
carro2.exibirDetalhes();
console.log