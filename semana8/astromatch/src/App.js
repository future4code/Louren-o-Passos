import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import WelcomeScreen from "./components/WelcomeScreen";
import ProfileCard from "./components/ProfileCard";
import MatchesList from "./components/MatchesList";
import { useSpring, animated } from "react-spring";

const ContainerApp = styled.div`
  border: 1px solid black;
  border-radius: 25px;
  width: 450px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  height: 50vw;
`;

function App() {
  const [page, setPage] = useState("profiles");

  const handleProfilePage = () => {
    setPage("profiles");
  };

  const handleMatchesPage = () => {
    setPage("matches");
  };

  const renderScreen = () => {
    switch (page) {
      case "welcome":
        return <WelcomeScreen handleProfilesPage={() => handleProfilePage()} />;
      case "profiles":
        return <ProfileCard handleMatchesPage={() => handleMatchesPage()} />;
      case "matches":
        return <MatchesList handleProfilesPage={() => handleProfilePage()} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <ContainerApp>{renderScreen()}</ContainerApp>
    </Container>
  );
}

export default App;
