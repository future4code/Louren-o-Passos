import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component {
  state = {
    curtido: false, // se o estado do elemento está "curtido"
    numeroCurtidas: 0, // número de curtidas do post
    comentando: false, // se a pessoa está em processo de comentar no post, quando clica no input
    numeroComentarios: 0, // numero de comentarios do post
    comentario: " "

    // Se alteramos tudo, os valores iniciais do post ja iniciam alterados
  }

  onClickCurtida = () => {
    this.setState({
    curtido: !this.state.curtido,
  })
  
    if (!this.state.curtido === true) {
      this.setState({
      numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
      numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }
  
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando // Ao clicar no ícone de comentário, se o valor de comentando está falso e passa a ser true e se clicarmos novamente ele passa para false
      // Desce um input com botõo de enviar
      // o método onChange ao alterar o seu estado tem o aparecimento de uma seção em JSX (o container de comentário)
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
    // o estado passa a ser false, ou seja ha retração do container e há o aumento do numero de comentários
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida} // variável que avalia se o estado está como curtido, se estiver o íconde deveria ser utilizado o branco
          onClickIcone={this.onClickCurtida} // Ao clicar  como curtir ele executa o método que printa no console "Curtiu"
          valorContador={this.state.numeroCurtidas}// contador que registra número de curtidas
        />

        <IconeComContador
          icone={iconeComentario} // O ícone do comentário que rege os métodos neste caso
          onClickIcone={this.onClickComentario} // Ao clicar no ícone de comentário,  é renderizada a SecaoComentario, que aparece na tela
          valorContador={this.state.numeroComentarios} // contador que registra número de comentários
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post