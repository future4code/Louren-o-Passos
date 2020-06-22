import React from 'react';
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta.js'
import PerguntaOpcoes from './PerguntaOpcoes.js'


export const ContainerEtapa = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`


class Etapa1 extends React.Component {

    state = {
        escolaridade:""
    }
    render() {
        return(
            <ContainerEtapa>
                <h2>Etapa 1</h2>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual o seu email?"} />
                <PerguntaOpcoes pergunta={"4. Qual a sua escolaridade?"}
                opcoes={["Ensino médio incompleto", "Ensino médio Completo", "Ensino médio Incompleto", "Ensino médio Completo"]}
                ></PerguntaOpcoes>
            </ContainerEtapa>
        )
    }
}

export default Etapa1;