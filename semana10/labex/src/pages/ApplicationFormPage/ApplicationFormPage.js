import React from 'react'
import { Vert2MainContainer, Title, ContFlex, RightImg } from "../../constants/Styled/Styled";
import { ApplicationForm } from "../../components/ApplicationForms/ApplicationForms"
import { goToLastPage } from "../../route/Coordinates/Coordinates";
import { useHistory } from "react-router-dom";
import Astronauta from "../../img/Astronauta.png"
import { Button } from '@chakra-ui/button';

const ApplicationFormPage = () => {
    const history = useHistory();
  
    return (
      <Vert2MainContainer>
  
        <Title>Inscreva-se para uma viagem</Title>
  
        <ContFlex>
          <ApplicationForm />
          <RightImg src={Astronauta} alt="imagem astronauta" />
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
  
  export default ApplicationFormPage