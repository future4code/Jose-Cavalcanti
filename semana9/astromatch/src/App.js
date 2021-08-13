import React, { useState } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import CardFoto from "./Telas/CardFoto/CardFoto"
import TelaMatches from "./Telas/TelaMatches/TelaMatches"
import styled from "styled-components"
import { BaseURL } from "./components/BaseURL/BaseURL"
import axios from "axios"


const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const ContainerPrincipal = styled.div`
display: flex;
justify-content: center;
` 

const theme = extendTheme({ colors })

export default function App(props) {
  const [Tela, setTela] = useState(true)

  const mudaTela = () => {
    setTela(!Tela)
  }

  const limpaMatch = () => {
    const URL = `${BaseURL}/clear`
    axios.put(URL)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <ContainerPrincipal>

    <ChakraProvider theme={theme}>
      {Tela ?
      <CardFoto 
      mudaTela={mudaTela}
      limpaMatch={limpaMatch}
      />
      :
      <TelaMatches
      mudaTela={mudaTela}
      limpaMatch={limpaMatch}
      />
    }
    </ChakraProvider>
    
    </ContainerPrincipal>
  )
}