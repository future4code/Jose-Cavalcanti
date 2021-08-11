import React from "react";
import axios from "axios";
import styled from "styled-components"
import TelaDetalhesPlaylist from "./TelaDetalhesPlaylist";

const CardPlaylist = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin: 10px;
    width: 300px;
    justify-content: space-between;
    display: flex;
    cursor: pointer;
`

export default class TelaListaPlaylists extends React.Component {
    state = {
        Playlists: []
    }

    componentDidMount() {
        this.pegaPlaylists()
    }

    pegaPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }

        axios.get(url, headers)
            .then((res) => {
                this.setState({Playlists: res.data.result.list})
            })
            .catch((err) => {
                console.log("Erro")
            })
    }

    deletaPlaylist = (playlistid) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistid}`
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }
        axios.delete(url, headers)
        .then((res) => {
            alert("Playlist deletada")
            this.pegaPlaylists()
        })
        .catch((err) => {
            alert("Erro")
        })
    }
    
    render() {
        const Playlists = this.state.Playlists.map((Playlist)  => {
            return (
                <CardPlaylist 
                key={Playlist.id}
                playlistId={Playlist.id}
                >
                    <button onClick={this.props.irParaDetalhes}>{Playlist.name}</button>
                    <button onClick={() => this.deletaPlaylist(Playlist.id)}>x</button>
                </CardPlaylist>
            )
        })
        console.log(this.state.Playlists)
            return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro Playlist</button>
                <h2>Tela de Playlist</h2>
                {Playlists}
            </div>
        )
    }
}