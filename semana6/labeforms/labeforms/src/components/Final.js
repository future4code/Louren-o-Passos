import React from 'react';
import styled from 'styled-components'

const ContainerEtapa = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`


class Final extends React.Component {

    render() {
        return(
            <ContainerEtapa>
                <h2>Fim do Formulário!</h2>
                <p>Obrigado! Em breve entramos em contato!</p>       
            </ContainerEtapa>

        )
    }
}

export default Final;