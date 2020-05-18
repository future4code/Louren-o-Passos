import React from 'react';
import styled from 'styled-components'

const ContainerEtapa = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
`


class Etapa1 extends React.Component {
    render() {
        return(
            <ContainerEtapa>
                <h2>Etapa 1</h2>
                <p>1. Qual o seu nome?</p>
                <input 
                />
                <p>2. Qual a sua idade?</p>
                <input 
                />
                <p>3.Qual o seu email?</p>
                <input 
                />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
                </select>
            </ContainerEtapa>
        )
    }
}

export default Etapa1;