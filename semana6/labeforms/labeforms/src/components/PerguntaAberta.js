import React from 'react';
import styled from 'styled-components'
import {ContainerEtapa} from './Etapa1.js'


class PerguntaAberta extends React.Component {
    render() {
        return(
            <ContainerEtapa>
                <p>{this.props.pergunta}</p>
                <input />
            </ContainerEtapa>
        )
    }
}

export default PerguntaAberta;