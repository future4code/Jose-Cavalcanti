import React from "react";
import axios from 'axios';
 
export default class TelaCadastroPlaylist extends React.Component {
    state = {
        nome: ""
    }

    handlNome = (event) => {
        this.setState({nome: event.target.value})
    }


    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome,
        }
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }

        axios.post(url, body, headers)
        .then((res) => {
            alert("playlist cadastrado")
            this.setState({nome: ""})
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
                <button onClick={this.props.irParaLista}>Ir para Playlists</button>
                <h2>Cadastro de Playlist</h2>
                <input 
                placeholder={"Nome da Playlist"}
                value={this.state.nome}
                onChange={this.handlNome}
                />
                <button onClick={this.fazerCadastro}>Cadastrar Playlist</button>
            </div>
        )
    }
}