import * as fs from 'fs'

const nomeArquivo: string = process.argv[2]
const novaTarefa: string = process.argv[3]

//  Comandos para leitura da base de dados:
const bufferArquivo: Buffer = fs.readFileSync(nomeArquivo)
const textoArquivo: string = String(bufferArquivo)
const tarefas: string[] = textoArquivo ? JSON.parse(textoArquivo) : []

function salvarTarefa(
    nomeArquivo: string,
    novaTarefa: string
): void {
    try {

        tarefas.push(novaTarefa)

        const dadosAtualizados = JSON.stringify(tarefas, null, 2)
        // Os parâmetros opcionais servem para identar o texto 
        
        fs.writeFileSync(nomeArquivo, dadosAtualizados)

        console.log("Tarefa salva!")

    } catch (error) {
        console.log(error.message || error)
    }

}

if (!nomeArquivo || !novaTarefa) {
    console.log(
        "\x1b[31m",
        "ERRO: Informe o nome do arquivo e a tarefa a ser salva."
    )
} else {
    salvarTarefa(nomeArquivo, novaTarefa)
}
