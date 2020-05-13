
const segunda = document.getElementsByTagName("ul")[0];
const terca = document.getElementsByTagName("ul")[1];
const quarta = document.getElementsByTagName("ul")[2];
const quinta = document.getElementsByTagName("ul")[3];
const sexta = document.getElementsByTagName("ul")[4];
const sabado = document.getElementsByTagName("ul")[5];
const domingo = document.getElementsByTagName("ul")[6];
const diaEscolhido = document.getElementById("dia-semana");
const novaTarefa = document.getElementById("input-tarefa");

function publicaTarefa() {
    
    if (diaEscolhido.value === "segunda" && novaTarefa.value != ""){
        let tarefa = novaTarefa.value;
        segunda.innerHTML +=`<li class="tarefa" onclick="riscaTarefa()"> ${tarefa}</li>`
        novaTarefa.value = ""
    } else if (diaEscolhido.value === "terca" && novaTarefa.value != "") {
        let tarefa = novaTarefa.value;
        novaTarefa.value = ""
    terca.innerHTML +=`<li class="tarefa"> ${tarefa}</li>`
    } else if (diaEscolhido.value === "quarta" && novaTarefa.value != "") {
        let tarefa = novaTarefa.value;
        quarta.innerHTML +=`<li class="tarefa"> ${tarefa}</li>`
        novaTarefa.value = ""
    } else if (diaEscolhido.value === "quinta" && novaTarefa.value != "") {
        let tarefa = novaTarefa.value;
        quinta.innerHTML +=`<li class="tarefa"> ${tarefa}</li>`
        novaTarefa.value = ""
    } else if (diaEscolhido.value === "sexta" && novaTarefa.value != "") {
        let tarefa = novaTarefa.value;
        sexta.innerHTML +=`<li class="tarefa"> ${tarefa}</li>`
        novaTarefa.value = ""
    } else if (diaEscolhido.value === "sabado" && novaTarefa.value != "") {
        let tarefa = novaTarefa.value;
        sabado.innerHTML +=`<li class="tarefa"> ${tarefa}</li>`
        novaTarefa.value = ""
    } else if (diaEscolhido.value === "domingo"&& novaTarefa.value != "") {
        let tarefa = novaTarefa.value;
        domingo.innerHTML +=`<li class="tarefa" onclick="riscaTarefa()"> ${tarefa}</li>`
        novaTarefa.value = ""
    } else {
        alert('Por favor, preencha o campo corretamente!');
        novaTarefa.focus()
    }
}
