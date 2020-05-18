import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1.js';
import styled from 'styled-components';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final.js';

const ContainerApp = styled.div `
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  margin: 20px;
`
const Botao = styled.button`
  margin-top: 20px;
  `

class App extends React.Component {
  state = {
    etapa: 1,
  };

  avancaEtapa = () => {
    this.setState ({etapa: this.state.etapa + 1})
  }


  render() {
    // const avancaOuNao = this.props.pergunta === "Ensino Médio Completo" || "Ensino Médio Incompleto" ? (this.setState ({etapa: 2})) : (this.setState ({etapa: 3}));
    

    const renderizaEtapa = () => {
        switch (this.state.etapa) {
          case 1:
            return <Etapa1 />;
          case 2: 
            return <Etapa2 />;
          case 3:
            return <Etapa3 />;
          case 4:
            return <Final />;
          default:
            return <Final />
        }
    };
    

    if (this.state.etapa <= 3 ) {
      return (
        <ContainerApp>
          {renderizaEtapa()}
          <Botao onClick={this.avancaEtapa}>Próxima Etapa</Botao>
        </ContainerApp>
      ) }  else {
        return (
          <ContainerApp>
            {renderizaEtapa()}
          </ContainerApp>
    
        )
      }

   


  }
}
  export default App;