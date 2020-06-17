import React from "react";

function WelcomeScreen(props) {
  return (
    <div>
      <button onClick={props.handleProfilesPage}>É hora de curtir</button>
    </div>
  );
}

export default WelcomeScreen;
