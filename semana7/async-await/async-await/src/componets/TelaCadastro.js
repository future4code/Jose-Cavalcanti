import React from "react";
 
export default class TelaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    handlNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handlEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        console.log(this.state)
    }

    render (){
        return(
            <div>
                <button onClick={this.props.irParaLista}>Ir para lista</button>
                <h2>Cadastro</h2>
                <input 
                placeholder={"Nome"}
                value={this.state.nome}
                onChange={this.handlNome}
                />
                <input placeholder={"Email"}
                value={this.state.email}
                onChange={this.handlEmail}
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}