import React from 'react';
import styled from 'styled-components'

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
                <h2>Etapa 2</h2>
                <p>Qual o seu curso?</p>
                <input />
                <p>Qual a sua unidade de ensino?</p>
                <input />
            </ContainerEtapa>

        )
    }
}

export default Etapa2;