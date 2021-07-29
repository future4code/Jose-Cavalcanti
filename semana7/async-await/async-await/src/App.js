import React from "react"
import TelaCadastro from "./componets/TelaCadastro";
import TelaListaUsuarios from "./componets/TelaListaUsuarois";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Pagina n'ao encontrada D?</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render() {
    return ( 
      <div>
        {this.escolheTela()}
      </div>
    )
  }
}

