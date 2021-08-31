import React from "react"
import { useHistory } from "react-router-dom"
import { goToLogin, goToTripsList } from "../../route/Coordinates/Coordinates"
import { Flex, Button, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react"

const HomePage = () => {
    const history =useHistory()

    const { toggleColorMode } = useColorMode()
    const { formBackGround } = useColorModeValue("gray.100", "gray.700")
    return (

        <Flex height="100vh" alighItems="center" justifyContent="center">
            <Flex direction="column" background={formBackGround} p={12} rounded={6}>
                <Heading mb={6}>Home Page</Heading>
                <Button mb={6} colorScheme="teal" onClick={() => goToTripsList(history)}>
                    ver viagens
                </Button>
                <Button mb={6} colorScheme="teal" onClick={() => goToLogin(history)}>
                    area admin
                </Button>
                <Button onClick={toggleColorMode}>
                    Tema Escuro
                </Button>
            </Flex>
        </Flex>

    )
}

export default HomePage