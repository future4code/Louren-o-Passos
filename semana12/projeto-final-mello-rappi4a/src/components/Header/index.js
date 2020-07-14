import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  const goToCartPage = () => {
    history.push("/cart");
  };

  const goToProfilePage = () => {
    history.push("/profile");
  };

  return (
    <div>
      <hr />
      <p>Header</p>
      <button onClick={goToFeedPage}>Home</button>
      <button onClick={goToCartPage}>Carrinho</button>
      <button onClick={goToProfilePage}>Perfil</button>
    </div>
  );
}

export default Header;
