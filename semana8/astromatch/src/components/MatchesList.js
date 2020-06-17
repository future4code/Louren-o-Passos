import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

function MatchesList(props) {
  const MatchPhoto = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
  `;
  const [matches, setMatches] = useState("");

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
          <div>
            <MatchPhoto src={match.photo} alt={match.name} />
            <span>{match.name}</span>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      <p>Você ainda não tem nenhum match :(</p>
    </div>
  );

  return (
    <div>
      <h1>Matches</h1>
      {matchesList}
      <button onClick={() => clearMatchList()}>Reset Matches</button>
      <button onClick={() => props.handleProfilesPage()}>Voltar</button>
    </div>
  );
}

export default MatchesList;
