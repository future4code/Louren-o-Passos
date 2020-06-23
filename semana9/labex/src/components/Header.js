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

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToApplicationForm = () => {
    history.push("/formulariocandidato");
  };

  return (
    <HeaderContainer>
      <HeaderOption onClick={goToApplicationForm}>Inscrição</HeaderOption>
      <HeaderOption onClick={goToLoginPage}>Login</HeaderOption>
    </HeaderContainer>
  );
}

export default Header;
