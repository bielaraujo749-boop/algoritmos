// Sprint 2 - Aula 14 material - Material 07 - Página 09
   
// Instânciando (criando) um objeto
let aluno:{
    nome: string , idade: number, ativo: boolean
} = {
    nome: "João",
    idade: 20,
    ativo: true
}

// acessando propiedades
console.log(aluno);
console.log(`Nome: ${aluno.nome}
Idade: ${aluno.idade}`);

if ( aluno.ativo === true ) {
    console.log(`Nome: ${aluno.nome} - Situação: Ativo`)
} else {
    console.log(`Nome: ${aluno.nome} - Situação: Inativo`)
};




// utilizando a notação colchetes
let propiedades: string = "nome"