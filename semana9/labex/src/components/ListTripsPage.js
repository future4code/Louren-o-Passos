import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HeaderLogged from "./HeaderLogged";
import axios from "axios";
import styled from "styled-components";
import useDetails from "../hooks/useDetails.js";

const Detail = styled.span`
  cursor: pointer;
  display: inline;
`;
//Grid / List View

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lourenco-mello/trips";

function ListTripsPage(props) {
  const history = useHistory();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [history]);

  const fetchTripsList = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTripsList();
  }, [trips]);

  const goToCreateTripPage = () => {
    history.push("/criar-viagem");
  };

  const goToDetailPage = (tripId) => {
    history.push("/detalhesdaviagem/" + tripId);
  };

  return (
    <div>
      <HeaderLogged />
      <h1>Lista de Viagens</h1>
      <div>
        {trips.map((trip) => {
          return (
            <div>
              <p>{trip.name}</p>
              <Detail onClick={() => goToDetailPage(trip.id)}>+</Detail>
            </div>
          );
        })}
      </div>
      <button onClick={goToCreateTripPage}>Criar nova Viagem</button>
    </div>
  );
}

export default ListTripsPage;
