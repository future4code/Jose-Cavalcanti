import React from "react"
import styled from "styled-components"

const ContainerEtapa = styled.div `
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`
const Paragrafo = styled.p `
    text-align: center;
    line-height: 1.5em;
`

export const Etapa4 = () => {
    return(
        <ContainerEtapa>
            <h1> O formulário acabou</h1>
            <Paragrafo>Agradecemos por participar!<br/>
            Entraremos em contato.
            </Paragrafo>
        </ContainerEtapa>
    )
}