import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Return from "@material-ui/icons/KeyboardReturn";

function MatchesList(props) {
  const MatchPhoto = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 15px;
  `;

  const MyReturn = styled(Return)`
    cursor: pointer;
  `;

  const MatchesHeadliner = styled.h1`
    text-align: center;
  `;

  const MatchesContainer = styled.div`
    border: 1px solid black;
    margin: 0 15px;
    border-radius: 5px;
    width: 435px;
    height: 550px;
  `;

  const MatchList = styled.div`
    height: 400px;
    display: flex;
    justify-content: center;

  `;
  const FooterButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px;
  `;
  const [matches, setMatches] = useState("");

  const MatchInListContainer = styled.div`
    margin: 10px 0;
    display: flex;
    justify-content: center;
  `;

  useEffect(() => {
    fetchMatchList();
  }, [matches]);

  const fetchMatchList = () => {
    Axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lourenco/matches"
    )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatchList = () => {
    // const body = {
    //   id: "PatusZf4mHH6UoZfYC8I",
    // };
    Axios.put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lourenco/clear"
      // body
    )
      .then((response) => {
        alert("Matches resetados!");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const matchesList = matches ? (
    <div>
      {matches.map((match) => {
        return (
          <MatchInListContainer>
            <MatchPhoto src={match.photo} alt={match.name} />
            <span>{match.name}</span>
          </MatchInListContainer>
        );
      })}
    </div>
  ) : (
    <div>
      <p>Você ainda não tem nenhum match :(</p>
    </div>
  );

  return (
    <MatchesContainer>
      <MatchesHeadliner>Matches</MatchesHeadliner>
      <MatchList> {matchesList}</MatchList>
      <FooterButtons>
        <MyReturn
          style={{ fontSize: 40 }}
          onClick={() => props.handleProfilesPage()}
        >
          Voltar
        </MyReturn>
        <button onClick={() => clearMatchList()}>Reset Matches</button>
      </FooterButtons>
    </MatchesContainer>
  );
}

export default MatchesList;
