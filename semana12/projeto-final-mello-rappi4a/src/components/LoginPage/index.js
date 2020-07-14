import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  const goToSignUpPage = () => {
    history.push("/signup");
  };

  return (
    <div>
      LoginPage
      <button onClick={goToFeedPage}>Fazer login</button>
      <button onClick={goToSignUpPage}>Fazer cadastro</button>
    </div>
  );
}

export default LoginPage;
