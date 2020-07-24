import React, { Component } from "react";
import axios from "axios";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import styled from "styled-components";

const ContainerRender = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vw;
`;

const ReturnButton = styled.button`
  background-color: green;
  border: none;
  color: white;
  width: 100px;
  padding: 5px;
  margin: 20px 0 0 20px;
  font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

const UserlistButton = styled.button`
  background-color: green;
  border: none;
  color: white;
  width: 120px;
  padding: 5px;
  margin: 20px 0 0 20px;
  font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
`;

class App extends Component {
  state = {
    listRender: false,
  };
  ChangeComponent = (event) => {
    this.setState({ listRender: !this.state.listRender });
  };
  render() {
    if (this.state.listRender) {
      return (
        <div>
          <ReturnButton onClick={this.ChangeComponent}>Voltar</ReturnButton>
          <ContainerRender>
            <UserList></UserList>
          </ContainerRender>
        </div>
      );
    } else {
      return (
        <div>
          <UserlistButton onClick={this.ChangeComponent}>
            Verificar Usuários
          </UserlistButton>
          <ContainerRender>
            <AddUser></AddUser>
          </ContainerRender>
        </div>
      );
    }
  }
}
export default App;
