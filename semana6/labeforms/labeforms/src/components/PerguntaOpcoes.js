import React from 'react';
import styled from 'styled-components'
import {ContainerEtapa} from './Etapa1.js'


class PerguntaOpcoes extends React.Component {
    render() {
        return(
            <ContainerEtapa>
                <p>{this.props.pergunta}</p>
                <select>
                    {this.props.opcoes.map(opcao =>{
                     return <option>{opcao}</option>   
                    })}
                </select>
            </ContainerEtapa>
        )
    }
}

export default PerguntaOpcoes;