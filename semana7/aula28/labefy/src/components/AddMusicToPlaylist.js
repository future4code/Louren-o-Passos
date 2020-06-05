import React, { Component } from "react";

class AddMusicToPlaylist extends Component {
  render() {
    return (
      <div>
        <h1>Adicionar Música a Playlist</h1>
        <input placeholder="Qual o nome da música?"></input>
        <input placeholder="Quais são os artistas?"></input>
        <input placeholder="Qual o link da música?"></input>
      </div>
    );
  }
}

export default AddMusicToPlaylist;
