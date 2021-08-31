import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { goToLastPage } from "../../route/Coordinates/Coordinates";
import { VertMainContainer, Title,} from "../../constants/Styled/Styled";
import { Button } from "@chakra-ui/react";
import useProtectedPage from '../../hooks/useProtectedPage';
import axios from "axios"
import { baseURL } from '../../constants/baseURL';
import TripDetailsCard from '../../components/tripDetailsCard/TripDetailsCard';
import PendingCandidatesCard from '../../components/pendingCandidatesCard/PendingCandidatesCard';
import AprovedCandidatesCard from '../../components/aprovedCandidatesList/AprovedCandidatesList';

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const params = useParams()
  const history = useHistory()

  useProtectedPage()

  const headers = {
    headers: { auth: localStorage.getItem("token") }
  }

  const getTripDetails = () => {
    const URL = `${baseURL}/trip/${params.id}`

    axios.get(URL, headers)
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  useEffect(() => {
    getTripDetails()
  }, [trip])

  return (
    <VertMainContainer>
      <Title>Viagem:</Title>

      <TripDetailsCard trip={trip} />

      <Button
        onClick={() => goToLastPage(history)}
        colorScheme="brand"
        size="lg"
        color="#251D44"
      >
        Voltar
          </Button>

      <Title> Candidatos pendentes</Title>
      <PendingCandidatesCard trip={trip} headers={headers} id={params.id} />

      <Title> Candidatos aprovados</Title>
      <AprovedCandidatesCard trip={trip} />

    </VertMainContainer>
  )
}

export default TripDetailsPage