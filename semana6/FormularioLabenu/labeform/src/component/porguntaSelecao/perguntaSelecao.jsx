import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export default class perguntaSelecao extends React.Component {

    render() {
        
        const item = this.props.opcoes.map((cadaItem, index) => {
            return (
                <option key={index}
                    value={cadaItem}>
                    {cadaItem}
                </option>)
        })

        return (
            <Container>
                <p>{this.props.pergunta}</p>
                <select
                onChange={this.props.onChange}
                id={this.props.id}
                >{item}
                </select>
                
            </Container>
        )
    }
}