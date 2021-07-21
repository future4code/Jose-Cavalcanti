  
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

export class perguntaFechada extends React.Component {
    state = {
        value:"",
    }
    
    render () {
        return (
            <Container>
            <p>{this.props.pergunta}</p>
            <input
                type={"text"}
                id={this.props.id}
                onChange={this.props.onChange}
                value={this.props.value}
            ></input>
        </Container>
        )
    }
}