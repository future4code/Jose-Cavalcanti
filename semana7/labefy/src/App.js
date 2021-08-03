import React from "react"
//import styled from "styled-components";
import TelaCadastroPlaylist from "./components/TelaCadastroPlaylist";
import TelaDetalhesPlaylist from "./components/TelaDetalhesPlaylist";
import TelaListaPlaylist from "./components/TelaListaPlaylist";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastroPlaylist irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaPlaylist irParaCadastro={this.irParaCadastro} irParaDetalhes={this.irParaDetalhes}/>
      case "detalhes":
        return <TelaDetalhesPlaylist irParaLista={this.irParaLista}/>
      default:
        return <div>Erro! Pagina nao encontrada</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  irParaDetalhes = () => {
    this.setState({telaAtual: "detalhes"})
  }

  render() {
    return ( 
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}
