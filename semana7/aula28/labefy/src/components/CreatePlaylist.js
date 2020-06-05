import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const DeletePlaylistButton = styled.span`
  color: red;
  cursor: pointer;
`;

class CreatePlaylist extends Component {
  state = {
    playlistName: "",
    playlists: [],
    playlistsTracks: [
      {
        id: "string",
        name: "string",
        artist: "string",
        url: "string",
      },
    ],
  };
  fetchPlaylistInfo = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "lourenco-passos-mello",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deletePlaylist = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "lourenco-passos-mello",
          },
        }
      )
      .then((response) => {
        alert("Playlist deletada com sucesso!");
        this.fetchPlaylistName();
      })
      .catch((error) => {
        alert("Erro! Verifique console!");
        console.log(error);
      });
  };

  onChangePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value });
  };
  componentWillMount = () => {
    this.fetchPlaylistName();
  };

  fetchPlaylistName = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "lourenco-passos-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  createPlaylist = () => {
    const body = {
      name: this.state.playlistName,
    };
    console.log(this.state.playlistName);
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "lourenco-passos-mello",
          },
        }
      )
      .then((response) => {
        //this.setState({ playlistName: "" });
        //this.setState({ playlists: response.data.result.list });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Criar Playlist!</h1>
          <input
            placeholder="Digite o nome da sua playlist"
            onChange={this.onChangePlaylistName}
            value={this.state.playlistName}
          ></input>
          <button onClick={this.createPlaylist}>Criar Playlist</button>
          <div>
            <ul>
              {this.state.playlists.map((playlist) => {
                return (
                  <li>
                    {playlist.name}{" "}
                    <DeletePlaylistButton
                      onClick={() => this.deletePlaylist(playlist.id)}
                    >
                      X
                    </DeletePlaylistButton>
                    <ul>
                      <li></li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;
