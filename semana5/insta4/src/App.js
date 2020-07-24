import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  justify-content: center;
`;

const Inputs = styled.input`
  width: 250px;
  margin: 10px;
`;

class App extends React.Component {
  state = {
    
    usuarios: [
      {
        nome: "Paulinha",
        foto: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150/",
      },
      {
        nome: "Soter",
        foto: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150/?random=1",
      },
      {
        nome: "Pedro",
        foto: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150/?random=2",
      },
    ],
    valorNovoPostNome: "",
    valorNovoPostFotoUsuario: "",
    valorNovoPostFotoPost: "",
  };
  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorNovoPostNome,
      foto: this.state.valorNovoPostFotoUsuario,
      fotoPost: this.state.valorNovoPostFotoPost,
    };

    const novosPosts = [...this.state.usuarios, novoPost];

    this.setState({ usuarios: novosPosts });
  };

  onChangeValorNovoPostNome = (event) => {
    console.log(event.target.value);
    this.setState({ valorNovoPostNome: event.target.value });
  };

  onChangeValorNovoPostFotoUsuario = (event) => {
    console.log(event.target.value);
    this.setState({ valorNovoPostFotoUsuario: event.target.value });
  };

  onChangeValorNovoPostFotoPost = (event) => {
    console.log(event.target.value);
    this.setState({ valorNovoPostFotoPost: event.target.value });
  };

  render() {
    const listaUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <div className={"app-container"}>
          <Post
            nomeUsuario={usuario.nome}
            fotoUsuario={usuario.foto}
            fotoPost={usuario.fotoPost}
          />
        </div>
      );
    });

    return (
      <div>
        <ContainerInputs>
          <Inputs
            value={this.setState.valorNovoPostNome}
            onChange={this.onChangeValorNovoPostNome}
            placeholder={"Insira o nome do Usuário"}
          />
          <Inputs
            value={this.setState.valorNovoPostFotoUsuario}
            onChange={this.onChangeValorNovoPostFotoUsuario}
            placeholder={"Insira o link da foto do Usuário"}
          />
          <Inputs
            value={this.setState.valorNovoPostFotoPost}
            onChange={this.onChangeValorNovoPostFotoPost}
            placeholder={"Insira o link do foto do post"}
          />
          <button onClick={this.adicionaPost}> Adicionar Post</button>
        </ContainerInputs>
        <div>{listaUsuarios}</div>
      </div>
    );
  }

export default App;
