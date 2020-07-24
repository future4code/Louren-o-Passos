import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerAddUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 350px;
  height: 450px;
  border-radius: 10px;
`;

const InputAddUser = styled.input`
  margin: 10px;
`;

const SaveNewUserButton = styled.button`
  background-color: blue;
  border: none;
  color: white;
  width: 100px;
  padding: 5px;
  font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

class AddUser extends Component {
  state = {
    nameValue: "",
    emailValue: "",
    users: [],
  };
  onChangeNameInput = (event) => {
    this.setState({ nameValue: event.target.value });
  };
  onChangeEmailInput = (event) => {
    this.setState({ emailValue: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "lourenco-passos-mello",
          },
        }
      )
      .then((response) => {
        alert("Sucesso!");
        console.log(response);
        this.setState({ nameValue: "" });
        this.setState({ emailValue: "" });
      })
      .catch((error) => {
        alert("Confira os seus dados e o console para mais informações.");
        console.log(error);
      });
  };

  RenderList = () => {};
  render() {
    return (
      <ContainerAddUser>
        <div>
          <h1>Adicionar Usuários</h1>
          <label>Nome</label>
          <InputAddUser
            value={this.state.nameValue}
            onChange={this.onChangeNameInput}
          />
        </div>
        <div>
          <label>Email</label>
          <InputAddUser
            value={this.state.emailValue}
            onChange={this.onChangeEmailInput}
          />
        </div>
        <SaveNewUserButton onClick={this.createUser}>Salvar</SaveNewUserButton>
      </ContainerAddUser>
    );
  }
}

export default AddUser;
