import React from "react";
import { goToTable } from '../../routs/Coordinator'
import { useHistory } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import { Container } from './styled'
import logo from "../../assets/logo.jfif"
import { Image, Box, Text } from "@chakra-ui/react"

const Home = () => {

    const history = useHistory()

    const jogar = () => {
        goToTable(history)
    }
    return (
        <Container>
            <Box boxSize="sm">
                <Image src={logo} alt="logo" />
            </Box>
            <Text color="#fff3ec" as="kbd" fontSize="3xl">Esta pronto para ver seu destino ?</Text>
            <Text color="#fff3ec" align="center" as="kbd" fontSize="xl">
                <p>como funciona ?</p>
                <p>▪ para começar clique em embaralhar!</p>
                <p>▪ escolha a carta que dira seu destino e clique nela para ver o que ela lhe diz</p>
                <p>▪ para voltar ao tabuleiro basta clicar novamente em embaralhar</p>
            </Text>
            <hr/>
                <Button color="#ffc0ad" colorScheme="blackAlpha" onClick={jogar}>Discover you destiny</Button>
        </Container>
    )
}

export default Home