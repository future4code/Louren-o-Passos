import React from 'react';
import styled from 'styled-components'
import PerguntaFechada from './PerguntaFechada.js'

const ContainerEtapa = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`


class Etapa2 extends React.Component {
    render() {
        return(
            <ContainerEtapa>
                <PerguntaFechada pergunta={"5. Qual o seu curso?"} />
                <PerguntaFechada pergunta={"6. Qual a sua unidade de ensino?"} />
            </ContainerEtapa>

        )
    }
}

export default Etapa2;