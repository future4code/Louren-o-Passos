import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import HeaderLogged from "./HeaderLogged";
import styled from "styled-components";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 40px 0 0 20px;
`;

const ImageContainer = styled.div`
  width: 50vw;
  background-color: black;
`;

const DetailPageContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;


function TripDetailPage() {
  const history = useHistory();
  const [tripDetail, setTripDetail] = useState({});
  const { tripId } = useParams();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    fetchTripDetail(tripId);
  }, [tripDetail]);

  const goToTripListPage = () => {
    history.push("/lista-viagens");
  };

  const fetchTripDetail = (tripId) => {
    const token = window.localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lourenco-mello/trip/" +
          tripId,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTripDetail(response.data.trip);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <HeaderLogged />
      <DetailsContainer>
        <h1>Detalhes da Viagem Selecionada</h1>
        <div>
          <p>{tripDetail.name}</p>
          <p>{tripDetail.planet}</p>
          <p>{tripDetail.description}</p>
          <p>{tripDetail.durationInDays} dias</p>
          <button onClick={goToTripListPage}>Voltar</button>
        </div>
      </DetailsContainer>
    </div>
  );
}

export default TripDetailPage;
