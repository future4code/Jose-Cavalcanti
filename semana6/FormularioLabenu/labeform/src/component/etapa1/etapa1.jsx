import React from "react"
import styled from "styled-components"
import { perguntaAberta } from "src\component\perguntaAberta\perguntaAberta.jsx"
import perguntaSelecao from "src\component\porguntaSelecao\perguntaSelecao.jsx"

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

export default class etapa1 extends React.Component {
    state = {
        nome: "",
        idade: "",
        email: "",
        escolaridade: "",
    }

    guardaState = (e) => {
        this.setState({[e.target.id]: e.target.value})   
    }


    render() {
        return (
            <ContainerEtapa>
                <h1> ETAPA 1: Dados gerais</h1>
                <perguntaAberta
                    pergunta={"1. Qual o seu nome?"}
                    id={"nome"}
                    onChange={this.guardaState}
                    // value={this.state.nome}
                />

                <perguntaAberta
                    pergunta={"2. Qual sua idade"}
                    id={"idade"}
                    onChange={this.guardaState}
                    value={this.state.idade}
                />

                <perguntaAberta
                    pergunta={"3. Qual o seu email"} 
                    id={"email"}
                    onChange={this.guardaState}
                    value={this.state.email}
                />

                <perguntaSelecao
                    pergunta={"4. Qual o grau de escolaridade?"}
                    id={"escolaridade"}
                    opcoes={["<escolher>",
                        "Ensino Médio Incompleto",
                        "Ensino Médio Completo",
                        "Ensino Superior Incompleto",
                        "Ensino Superior Completo"
                    ]}
                    onChange={this.guardaState}
                />
                <BotaoPagina
                    onClick={this.props.onClickProximaEtapa}
                >Próxima Etapa
            </BotaoPagina>

            </ContainerEtapa>
        )
    }
}