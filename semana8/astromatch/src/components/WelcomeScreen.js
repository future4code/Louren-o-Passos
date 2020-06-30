import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import styled from "styled-components";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#5B2C7D",
    },
    seconday: {
      main: "#482363",
    },
  },
});

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  margin: 0 15px;
  border-radius: 5px;
  width: 435px;
  height: 550px;
`;

const MyPlayButton = styled(PlayCircleFilledIcon)`
  cursor: pointer;
  color: #404040;
  &:hover {
    color: #9247c9;
  }
`;

const WelcomeHeadline = styled.h1`
  color: #1a1a1a;
`;

function WelcomeScreen(props) {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 700 },
    delay: 250,
  });

  return (
    <animated.div style={animation}>
      <WelcomeContainer>
        <WelcomeHeadline>Começar</WelcomeHeadline>
        <MyPlayButton
          style={{ fontSize: 80 }}
          onClick={props.handleProfilesPage}
        />
      </WelcomeContainer>
    </animated.div>
  );
}

export default WelcomeScreen;
