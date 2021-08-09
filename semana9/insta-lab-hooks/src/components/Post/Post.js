import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

export function Post (props) {
  const [estadoCurtida, setEstadoCurtida] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [estadoComentando, setEstadoComentando] = useState(false)
  const [comentarios, setComentarios] = useState (0)
  const [enviaComentario, setEnviaComentario] = useState([])

  const onClickCurtida = () => {
    if(estadoCurtida) {
      setEstadoCurtida(!estadoCurtida)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setEstadoCurtida(!estadoCurtida)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
      setEstadoComentando(!estadoComentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...enviaComentario, comentario]
    setEnviaComentario(listaDeComentarios)
    setEstadoComentando(false)
    setComentarios(comentarios +1)   
  }

  const iconeCurtida = estadoCurtida ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  const caixaDeComentario = estadoComentando ? (<SecaoComentario enviarComentario={enviarComentario}/>
    ) :(
      enviaComentario.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={comentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post