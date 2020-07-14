import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/index";

function FeedPage() {
  let history = useHistory();

  const goToSearchPage = () => {
    history.push("/search");
  };

  const goToRestaurantPage = () => {
    history.push("/restaurant");
  };

  return (
    <div>
      FeedPage
      <button onClick={goToSearchPage}>Buscar</button>
      <button onClick={goToRestaurantPage}>Restaurante</button>
      <Header />
    </div>
  );
}

export default FeedPage;
