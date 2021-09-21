import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { FrontCard } from "../../Components/FrontCard";
import { BackCard } from "../../Components/BackCard"
import { goToHome } from "../../routs/Coordinator"
import { Button, ButtonGroup, HStack } from "@chakra-ui/react"
import Tarot from "../../tarot.json"
import background from "../../assets/definitivo.jfif"


const Body = styled.body`
    background-color: #55423d;
    font-family: cursive;
    color: #aaaaaa;
    min-width: 100vw;
    min-height: 97vh;
    text-align: center;
    padding: 5px;
`

const Table = () => {
    const [lado, setLado] = useState(false)
    const history = useHistory()

    const scrumble = () => {
        setLado(!lado)
    }

    const sair = () => {
        goToHome(history)
    }

    return (
        <Body style={{ backgroundImage: `url(${background})` }}>
            <HStack isInline spacing={4} justifyContent="space-evenly">
                <Button colorScheme={"whiteAlpha"} color={"#271c19"} onClick={scrumble}>
                    {lado ? "MOSTRAR TUDO" : "EMBARALHAR"}
                </Button>
                <Button colorScheme={"whiteAlpha"} color={"#271c19"} onClick={sair}>
                    Sair!
                </Button>
            </HStack>
            {lado ? <BackCard tarot={Tarot} /> : <FrontCard tarto={Tarot} />}
        </Body>
    )
}
export default Table