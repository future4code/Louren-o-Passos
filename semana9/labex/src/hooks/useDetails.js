import { useState } from "react";
import axios from "axios";

// Este hook serve para olhar os detalhes de uma viagem específica. É necessário um id referente a viagem

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lourenco-mello/trip/";

const useDetails = (tripId) => {
  const [tripDetail, setTripDetail] = useState("");
  axios
    .get(url + tripId)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default useDetails;
