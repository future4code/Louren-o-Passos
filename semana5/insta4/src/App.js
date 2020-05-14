import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {

    usuarios : [
    {
    nome: "paulinha",
    foto: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150/"
  },
  {
    nome: "Soter",
    foto: "https://picsum.photos/50/50?random=1",
    fotoPost: "https://picsum.photos/200/150/?random=1"

  },
  {
    nome: "Pedro",
    foto: "https://picsum.photos/50/50?random=2",
    fotoPost: "https://picsum.photos/200/150/?random=2"

  }
  ]
};


  render() {

    const listaUsuarios = this.state.usuarios.map((usuario) => {
       
      return (
       
        <div className={'app-container'}>
          <Post
          nomeUsuario={usuario.nome}
          fotoUsuario={usuario.foto}
          fotoPost={usuario.fotoPost}
          />
        </div>  

    );
  });


  return (
    <div>
      <div>{listaUsuarios}</div>
    </div>
  );
}
}
export default App;
