const operacao: string = process.argv[2]
const primeiroNumero: number = Number(process.argv[3])
const segundoNumero: number = Number(process.argv[4])

if (!primeiroNumero || !segundoNumero) {
    console.log(
        "\x1b[31m",
        "ERRO: Informe ao menos dois valores numéricos"
    )
} else {

    switch (operacao) {
        case "som":
            console.log(primeiroNumero + segundoNumero)
            break
        case "sub":
            console.log(primeiroNumero - segundoNumero)
            break
        case "mult":
            console.log(primeiroNumero * segundoNumero)
            break
        case "div":
            console.log(primeiroNumero / segundoNumero)
            break
        default:
            console.log(
                "\x1b[31m",
                "ERRO: Operação inválida. Escolha 'som','sub','mult' ou 'div' "
            )
    }
}


