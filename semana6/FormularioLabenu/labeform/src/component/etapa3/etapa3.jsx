import React from "react"
import styled from "styled-components"
import { perguntaFechada } from "../perguntaFechada/perguntaFechada.jsx.js"
import PerguntaSelecao from "../perguntaSelecao/perguntaSelecao.jsx.js"

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

export class Etapa3 extends React.Component {
    state = {
        razaoTermino: "",
        cursoComplementar: "",
        escolaridadeComplementar: "",
    }

    guardaState = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    render() {
        return (
            <ContainerEtapa>
                <h1> ETAPA 3: Informações Gerais de Ensino</h1>
                <perguntaFechada
                    pergunta={"Por que você não terminou um curso de graduação"}
                    id={"razaoTermino"}
                    onChange={this.guardaState}
                    value={this.state.razaoTermino}
                />

                <perguntaFechada
                    pergunta={"Você fez algum curso complementar?"}
                    id={"cursoComplementar"}
                    onChange={this.guardaState}
                    value={this.state.cursoComplementar}
                />

                <perguntaSelecao
                    pergunta={"Qual o grau de escolaridade"}
                    id={"escolaridadeComplementar"}
                    opcoes={["<escolher>",
                        "Curso Técnico",
                        "Curso de Inglês",
                        "Não fiz curso complementar",
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