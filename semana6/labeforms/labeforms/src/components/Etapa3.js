import React from 'react';
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaOpcoes from './PerguntaOpcoes'

const ContainerEtapa = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`


class Etapa3 extends React.Component {
    render() {
        return(
            <ContainerEtapa>
                <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"} />
                <PerguntaOpcoes pergunta={"8. Você fez algum curso complementar?"}
                opcoes={["Nenhum", "Curso Técnico", "Curso de Inglês"]}
                ></PerguntaOpcoes>
        
            </ContainerEtapa>

        )
    }
}

export default Etapa3;