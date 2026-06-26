let codigo: number;

console.log("Selecione o código da opção desejada"); 

console.log("Menu de opções");
console.log("- Código - Opção     - ");
console.log("-    1   - Incluir   - ");
console.log("-    2   - Alterar   - ");
console.log("-    3   - Excluir   - ");
console.log("-    4   - Pesquisar - ");
console.log("-    5   - Sair      - ");

// usuario insere o código desejado
codigo = 5;

switch ( codigo ) {
    case 1:   
        console.log(" Opção selecionada : 1 - Incluir");
        break;
        
    case 2:   
        console.log(" Opção selecionada : 2 - Alterar");
        break;

    case 3:   
        console.log(" Opção selecionada : 3 - Excluir");
        break;

    case 4:   
        console.log(" Opção selecionada : 4 - Pesquisar");
        break;

    case 5:   
        console.log(" Opção selecionada : 5 - Sair");
        break;


    default:
        console.log(" ERRO: Opção selecionada é inválida ");
}