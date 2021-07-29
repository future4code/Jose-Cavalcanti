import React from "react";
import axios from 'axios';
 
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
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }

        axios.post(url, body, headers)
        .then((res) => {
            alert("usuario cadastrado")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
            console.log(err.response.data)
        })
        console.log(this.state)
    }

    render() {
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