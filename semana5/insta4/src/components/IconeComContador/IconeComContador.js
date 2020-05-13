import React from 'react'
import './IconeComContador.css'
// O ícone com contador serve para pegar o ícone de comentário e curtida e juntar com um contador específico de cada funcionalidade

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
