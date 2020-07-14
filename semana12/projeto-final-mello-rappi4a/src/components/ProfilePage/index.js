import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header";

function ProfilePage() {
  let history = useHistory();

  const goToEditProfilePage = () => {
    history.push("/edit-profile");
  };

  const goToEditAddressPage = () => {
    history.push("/edit-address");
  };

  return (
    <div>
      ProfilePage
      <button onClick={goToEditProfilePage}>Editar perfil</button>
      <button onClick={goToEditAddressPage}>Editar endereço</button>
      <Header />
    </div>
  );
}

export default ProfilePage;
