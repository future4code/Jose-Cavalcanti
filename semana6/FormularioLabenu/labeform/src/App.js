import React from "react"
import styled from "styled-components"
import Etapa1 from "./component/etapa1/etapa1.jsx"
import Etapa2 from "./component/etapa2/etapa2.jsx"
import {Etapa3} from "./component/etapa3/etapa3.jsx"
import {Etapa4} from "./component/etapa4/etapa4.jsx"


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends React.Component {
  state = {
    pagina: 1,
  }


  onClickProximaEtapa = () => {
    this.setState({
      pagina: this.state.pagina <=4 && Number(this.state.pagina)+1
    })
    console.log(this.state)
  } 

  render() {


    const renderiza = () => {
      switch (this.state.pagina) {
        case 1:
          return <Etapa1 onClickProximaEtapa={this.onClickProximaEtapa}/>
        case 2:
          return <Etapa2 onClickProximaEtapa={this.onClickProximaEtapa}/>
        case 3:
          return <Etapa3 onClickProximaEtapa={this.onClickProximaEtapa}/>
        case 4:
          return <Etapa4 />
        default:
          return <div></div>
      }
    }

    return (
      <MainContainer>

        {renderiza()}

      </MainContainer>
    )
  }
}

export default App;