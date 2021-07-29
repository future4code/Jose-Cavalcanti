import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    justify-content: space-between;
    display: flex;
`

export default class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegaUsuarios()
    }

    pegaUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }

        axios.get(url, headers)
            .then((res) => {
                this.setState({usuarios: res.data})
            })
            .catch((err) => {
                console.log("Erro")
            })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }
        axios.delete(url, headers)
        .then((res) => {
            alert("Usuario deletado")
            this.pegaUsuarios()
        })
        .catch((err) => {
            alert("Erro")
        })
    }
    
    render() {
        const listaUsuarios = this.state.usuarios.map((user)  => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={() => this.deletarUsuario(user.id)}>x</button>
                </CardUsuario>
            )
        })
        console.log(this.state.usuarios)
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Tela de lista</h2>
                {listaUsuarios}
            </div>
        )
    }
}