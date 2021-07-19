import React from "react"
import styled from "styled-components"
import {perguntaFechada} from "../perguntaFechada/perguntaFechada.jsx"


const ContainerEtapa = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const BotaoPagina = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`
export default class etapa2 extends React.Component {
    state = {
        curso:"",
        unidade:"",
    }

    guardaState = (e) => {
        this.setState({[e.target.id]: e.target.value})   
    }

    render() {
        return (
            <ContainerEtapa>
                <h1> ETAPA 2: Informações do Ensino Superior</h1>
                <perguntaFechada
                    pergunta={"Qual o curso?"}
                    id={"curso"}
                    onChange={this.guardaState}
                    value={this.state.curso}
                />
                
                <perguntaFechada
                pergunta={"Qual a unidade de Ensino"}
                id={"unidade"}
                onChange={this.guardaState}
                value={this.state.unidade}
                />

                <BotaoPagina
                    onClick={this.props.onClickProximaEtapa}
                >Próxima Etapa
            </BotaoPagina>

            </ContainerEtapa>
        )
    }
}