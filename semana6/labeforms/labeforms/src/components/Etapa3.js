import React from 'react';
import styled from 'styled-components'

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
                <h2>Etapa 3</h2>
                <p>Por que você não terminou um curso de graduação?</p>
                <input />
                <p>Você fez algum curso complementar?</p>
                <select>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>       
        
            </ContainerEtapa>

        )
    }
}

export default Etapa3;