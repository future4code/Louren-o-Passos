import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: flex-end;
  border: 1px solid black;
  height: 5vw;
  text-align: right;
`;

const HeaderOption = styled.p`
  margin: 20px 15px;
  font-size: 2.5vh;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

function Header(props) {
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    history.push("/login");
  };

  const goToManageCandidates = () => {
    history.push("/gerenciar-candidatos");
  };

  return (
    <HeaderContainer>
      <HeaderOption onClick={goToManageCandidates}>Gerenciar Candidatos</HeaderOption>
      <HeaderOption onClick={logout}>Logout</HeaderOption>
    </HeaderContainer>
  );
}

export default Header;
