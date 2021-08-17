import React from "react"
import ListaMatches from "../../components/ListaMatches/ListaMatches";
import { Box } from "@chakra-ui/react"

export default function TelaMatches(props) {
  
    return (
        <div>
        <header>
            <button onClick={props.mudaTela}>
                person
            </button>
        </header>

        <Box bg="tomato" w="100%" p={4} color="white">
        <ListaMatches />
        </Box>

        <div>
            <button onClick={props.limpaMatch}>
                limpa match
            </button>
        </div>
        </div>
    );
  }