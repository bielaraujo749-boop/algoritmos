//atividade do slide 14

let aluno:{
    nome: string , idade: number, ativo: boolean
} = {
    nome: "Gabriel",
    idade: 18,
    ativo: true
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
if ( aluno.ativo ) {
    console.log("Situação: Matriculado");
} else {
    console.log("Situação: Não matriculado")
};

// item 
aluno.idade = 30;
console.log ( aluno );