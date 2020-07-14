import React from "react";
import { useHistory } from "react-router-dom";

function SignUpAddressPage() {
  let history = useHistory();

  const goToFeedPage = () => {
    history.push("/feed");
  };

  return (
    <div>
      SignUpAddressPage
      <button onClick={goToFeedPage}>Cadastrar</button>
    </div>
  );
}

export default SignUpAddressPage;
