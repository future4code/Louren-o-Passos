import React, { Component } from "react";
import CreatePlaylist from "./components/CreatePlaylist";
import AddMusicToPlaylist from "./components/AddMusicToPlaylist"

class App extends Component {
  render() {
    return (
      <div>
        <CreatePlaylist></CreatePlaylist>
        <AddMusicToPlaylist></AddMusicToPlaylist>
      </div>
    );
  }
}

export default App;
