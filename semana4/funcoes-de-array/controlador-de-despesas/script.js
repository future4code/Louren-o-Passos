const valorInserido = document.getElementById("valor");
const tipoDespesaInserido = document.getElementById("tipo");
const descricaoInserida = document.getElementById("descricao");
const arrayDespesasInseridas = [];

function criaObjeto(){

    if (valorInserido.value !== "" && tipoDespesaInserido.value !== "" && descricaoInserida.value !== ""){
        const despesa = {

            valor:  valorInserido.value,
            tipo: tipoDespesaInserido.value,
            descricao: descricaoInserida.value,
        }
        arrayDespesasInseridas.push(despesa);
        console.log(arrayDespesasInseridas);
    } else {
        alert("Confira os seus dados!")
    }
}