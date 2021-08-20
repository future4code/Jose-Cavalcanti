import React from 'react'
import { useHistory } from "react-router-dom";
import { goToLastPage, goToCreateTrip, goToLogin } from "../../route/Coordinates/Coordinates";
import { Vert2MainContainer, ButtonsContainer} from "../../constants/Styled/Styled";
import { Button } from "@chakra-ui/react";
import useProtectedPage from '../../hooks/useProtectedPage';
import AdminTripsList from '../../components/adminTripList/AdminTripList';

const AdminHomePage = () => {
  const history = useHistory();

  useProtectedPage()

  const logOut = () => {
    localStorage.setItem("token", "")
    goToLogin(history)
  }

  return (
    <Vert2MainContainer>

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
          onClick={() => goToCreateTrip(history)}
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Criar viagem
          </Button>

        <Button
          onClick={logOut}
          colorScheme="brand"
          size="lg"
          color="#251D44"
        >
          Logout
          </Button>

        

      </ButtonsContainer>

      <AdminTripsList />

    </Vert2MainContainer>
  )
}

export default AdminHomePage