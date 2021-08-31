import React from 'react'
import { useHistory } from "react-router-dom";
import { goToLastPage, goToApplication } from "../../route/Coordinates/Coordinates";
import {VertMainContainer, ButtonsContainer, Title,} from "../../constants/Styled/Styled";
import { Button } from "@chakra-ui/react";
import { TripsList } from "../../components/TripList/TripList"

const ListTripsPage = () => {
  const history = useHistory();

  return (
    <VertMainContainer>

      <ButtonsContainer>
        <Button
          onClick={() => goToLastPage(history)}
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Voltar
          </Button>

        <Button
          onClick={() => goToApplication(history)}
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Inscrever-se
          </Button>

      </ButtonsContainer>

      <Title>Lista de Viagens</Title>
      
      <TripsList />

    </VertMainContainer>
  )
}

export default ListTripsPage