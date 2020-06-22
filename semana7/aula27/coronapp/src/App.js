import React, { Component } from 'react';
import Intro from "./components/Intro";
import CountryData from "./components/CountryData";

class App extends Component {
state = {
  screenPhase: false
}

  render() {
    const screen = this.state.screenPhase ? <Intro/> : <CountryData/>

    return (
      <div>
        {screen}
      </div>
    );
  }
}

export default App;