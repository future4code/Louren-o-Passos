const valorInserido = document.getElementById("valor");
const tipoDespesaInserido = document.getElementById("tipo");
const descricaoInserida = document.getElementById("descricao");
const tabelaExtrato = document.getElementById('tabela-gastos')
const arrayDespesasInseridas = [];
const arrayValoresGastos = [];


function criaObjeto(){

    if (valorInserido.value !== "" && tipoDespesaInserido.value !== "" && descricaoInserida.value !== ""){
        const despesas = {

            valor:  valorInserido.value,
            tipo: tipoDespesaInserido.value,
            descricao: descricaoInserida.value,
        }
        arrayDespesasInseridas.push(despesas);
        publicaExtrato();

       
    } else {
        alert("Confira os seus dados!")
    }
}

const filtragemUsuario = arrayDespesasInseridas.filter((despesa, index,array)) => {
    if (despesa.valor > )
}










function publicaExtrato(){
    tabelaExtrato.innerHTML += `<tr><td> ${valorInserido.value}</td><td>${tipoDespesaInserido.value}</td><td>${descricaoInserida.value}</td> `
    valorInserido.value = "";
    tipoDespesaInserido.value = "";
    descricaoInserida.value = "";

}
