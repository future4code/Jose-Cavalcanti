import React, { useEffect, useState } from "react"
import axios from "axios"
import {BaseURL} from "../../components/BaseURL/BaseURL"
import trhobber from "../../assets/trhobber.gif"

export default function CardFoto(props) {
  const [person, setPerson] = useState({})

  useEffect(() => {
    pegaPessoa()
  }, [])

  const addPessoa = () => {
    const URL = `${BaseURL}/choose-person`
    const body = {
      id: person.id,
      choice: true
    }
    axios.post(URL, body)
      .then((res) => {
        pegaPessoa()
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const pegaPessoa = () => {
    const URL = `${BaseURL}/person`
    axios.get(URL)
      .then((res) => {
        setPerson(res.data.profile)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div>
      <header>
        <button onClick={props.mudaTela}>
          Tela
        </button>
      </header>

      <div>
        <div>
          {
            person.photo ?
              (
                <img src={person.photo} alt="foto de perfil" />
              )
              :
              <img src={trhobber} alt="loading" />
          }
        </div>
        <h1>
          {person.name}, {person.age}
        </h1>
        <h2>{person.bio}</h2>
      </div>

      <div>
        <button onClick={pegaPessoa}>
          pegaPessoa
        </button>
        <button onClick={addPessoa}>
          addPessoa
        </button>
        <button onClick={props.limpaMatch}>
          limpa matches
        </button>
      </div>
    </div>
  )
}