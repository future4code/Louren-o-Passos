import React from "react";
import Header from "./Header";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: flex-end;
`;

const FutureAndBeyondContainer = styled.div`
  width: 60vh;
  display: inline-block;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeHeadline = styled.h1`
  font-size: 10vh;
`;

const HomeSubHeading = styled.p`
  font-size: 3vh;
`;

function HomePage(props) {
  const history = useHistory();

  const goToApplicationForm = () => {
    history.push("/formulariocandidato");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <HomeContainer>
        <FutureAndBeyondContainer>
          <HomeHeadline>Ao infinito e além</HomeHeadline>
          <HomeSubHeading>
            Clique no botão abaixo para ser redirecionado para o formulário de
            inscrição e boa sorte!
          </HomeSubHeading>
          <button onClick={goToApplicationForm}>Formulário de inscrição</button>
        </FutureAndBeyondContainer>
      </HomeContainer>
    </div>
  );
}

export default HomePage;
