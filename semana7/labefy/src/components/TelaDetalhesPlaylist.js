import React from "react";
//import styled from "styled-components";
import axios from "axios";

export default class TelaDetalhesPlaylist extends React.Component {
    state= {
        musica: [],
        nome: "",
        artista: "",
        url: ""
    }

    componentDidMount = () => {
        this.pegaMusica()
    }

    pegaMusicas = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }
        axios.get(url, headers)
        .catch((res) => {
            this.setState({tracks: res.data.result.tracks})
            console.log(res)
        })
        .then((err) => {
            console.log(err)
        })
    }

    deletaMusica = (musicaId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${musicaId}`
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }
        axios.delete(url, headers)
        .catch((res) => {
            this.pegaMusica();
            console.log(res)
        })
        .then((err) => {
            console.log(err)
        })
        this.setState({
            musicaNome: "",
            artista: "",
            url: ""
        })
        }

    adicionaMusica = (e) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
        const headers = {
            headers: {
                Authorization: "jose-cavalcanti-lovelace"
            }
        }
        const body = {
            name: this.state.musicaNome,
            artist: this.state.artista,
            url: this.state.url
        }
        axios.post(url, headers)
        .catch((res) => {
            console.log(res)
        })
        .then((err) => {
            console.log(err)
        })

    }
    mudaValorImput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <TrackCreationForm onSubmit={this.addTrackToPlaylist} >
                    <div>
                        <label>Nome da música:</label>
                        <input 
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <input 
                            placeholder="Nome do Artista"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <input 
                            placeholder="URL da música"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <button type="submit" >Adicionar música</button>
                </TrackCreationForm>
                {tracks}
                <button onClick={() => this.props.changePage("playlists", "")} >Voltar para playlists</button>
            </PlaylistDetailContainer>
            </div>
            <div>
                <button onClick={this.props.irParaLista}>Playlists</button>
                <h1>Detalhes</h1>
            </div>
        )
    }
}