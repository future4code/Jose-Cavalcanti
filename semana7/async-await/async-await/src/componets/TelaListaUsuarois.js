import React from "react";

export default class TelaListaUsuarios extends React.Component{
    render (){
        return(
            <div>
                <button onClick={this.props.irParaCadastro}> Ir para Cadastro</button>
                <h2>Tela de lista</h2>
            </div>
        )
    }
}