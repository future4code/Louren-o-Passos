import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HeaderLogged from "./HeaderLogged";
import axios from "axios";

const baseURL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lourenco-mello/trips";

function ListTripsPage(props) {
  const history = useHistory();

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token !== null) {
      history.push("/lista-viagens");
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

  return (
    <div>
      <HeaderLogged />
      <h1>Lista de Viagens</h1>
    </div>
  );
}

export default ListTripsPage;
