import React from 'react'
import { useHistory } from "react-router-dom";
import { Vert2MainContainer, Title, ContFlex, RightImg, } from "../../constants/Styled/Styled";
import useProtectedPage from '../../hooks/useProtectedPage';
import { CreateTripForm } from '../../components/createTripForm/CreateTripForm';
import { goToLastPage } from "../../route/Coordinates/Coordinates";
import { Button } from "@chakra-ui/react"
import Galaxy from "../../img/Galaxy.png"

const CreateTripPage = () => {
    const history = useHistory();

    useProtectedPage()

    return (
        <Vert2MainContainer>

            <Title>Criar viagem</Title>

            <ContFlex>
                <CreateTripForm />
                <RightImg src={Galaxy} alt="imagem astronauta" />
            </ContFlex>

            <Button
                onClick={() => goToLastPage(history)}
                colorScheme="teal"
                size="lg"
                color="#251D44"
            >
                Voltar
            </Button>

        </Vert2MainContainer>
    )
}

export default CreateTripPage