import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: "",
        completa:true
      }],
      inputValue: '',
      filtro: '',
    }

  componentDidUpdate() {

    localStorage.setItem("tarefas",JSON.stringify(this.state.tarefas))

  };

  componentDidMount() {
    const tarefasLocal = localStorage.getItem("tarefas")

   const tarefasLocalObjeto = JSON.parse(tarefasLocal)

   if(tarefasLocal){
    this.setState({tarefas: tarefasLocalObjeto})
   } 

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    this.setState({inputValue: ""})
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    } 


    this.setState({tarefas: [...this.state.tarefas, novaTarefa]})
  }

  selectTarefa = (id) => {

    const statusTarefa = this.state.tarefas.map((tarefa)=>{
      if(tarefa.id === id){
        const novaTarefa = {...tarefa,completa: !tarefa.completa}
        return novaTarefa
      } else {
        return tarefa
      }

      
    })

    this.setState({tarefas: statusTarefa})

  }

  deletarTarefa = (id) => {
    const novaLista = [...this.state.tarefas]

    const listaFiltrada = novaLista.filter((tarefa) => {
      return tarefa.id !== id
    })

    this.setState({tarefas: listaFiltrada})
  }

  apagarTarefas = () => {
    this.setState({tarefas: [{id: "", texto: "", completa: ""}]})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input placeholder="adicionar tarfa" value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          <button onClick = {this.apagarTarefas}> Apagar todas as Tarefas</button>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
              <Tarefa key = {tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                
              </Tarefa>

              <button onClick = {() => this.deletarTarefa(tarefa.id)}>Deletar</button>
              </div>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App