import React from "react";
import { useHistory } from "react-router-dom";

function SignUpPage() {
  let history = useHistory();

  const goToSignUpAddressPage = () => {
    history.push("/signup-address");
  };
  return (
    <div>
      SignUpPage
      <button onClick={goToSignUpAddressPage}>Cadastrar</button>
    </div>
  );
}

export default SignUpPage;
