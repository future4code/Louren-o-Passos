import React from "react";
import { useHistory } from "react-router-dom";

function SearchPage() {
  let history = useHistory();

  const goToRestaurantPage = () => {
    history.push("/restaurant");
  };
  return (
    <div>
      SearchPage
      <button onClick={goToRestaurantPage}>Restaurante</button>
    </div>
  );
}

export default SearchPage;
