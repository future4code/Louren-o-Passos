import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

class UserList extends Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    this.showUsers();
  };

  userDeletion = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "lourenco-passos-mello",
          },
        }
      )

      .then((response) => {
        alert("Usuário apagado com sucesso!");
        this.showUsers();
      })
      .catch((error) => {
        alert("Erro! Verifique console");
        console.log(error);
      });
  };

  showUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "lourenco-passos-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        alert("Erro! Verifique console");
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <h1> Lista de Usuários</h1>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li>
                {user.name} -{" "}
                <DeleteButton onClick={() => this.userDeletion(user.id)}>
                  X
                </DeleteButton>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
