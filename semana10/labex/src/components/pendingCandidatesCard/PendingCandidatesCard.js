import React from "react";
import { Button } from "@chakra-ui/react";
import {ButtonsContainer, TripCard} from "../../constants/Styled/Styled";
import { decideCandidate } from "../../hooks/requests";

export default function PendingCandidatesCard(props) {
    const candidates = props.trip.candidates;
  
    return (
        <div>
            {candidates ?
                candidates.map((candidate) => {
                    return (

                        <TripCard key={candidate.id}>
                            <p>Nome: {candidate.name} </p>
                            <p>Idade: {candidate.age} </p>
                            <p>Profissão: {candidate.profession} </p>
                            <p>País: {candidate.country}</p>
                            <p>Texto de candidatura: {candidate.applicationText}</p>

                            <ButtonsContainer>
                                <Button

                                    colorScheme="brand"
                                    size="lg"
                                    color="#251D44"
                                    onClick={() => decideCandidate(candidate.id, true, props.trip.id, props.headers)}
                                >
                                    Aprovar
                            </Button>

                                <Button

                                    colorScheme="brand"
                                    size="lg"
                                    color="#251D44"
                                    onClick={() => decideCandidate(candidate.id, false, props.trip.id, props.headers)}
                                >
                                    Reprovar
                             </Button>
                            </ButtonsContainer>
                        </TripCard>

                    );
                })
                :
                <TripCard>Não há Candidatos pendentes</TripCard>
            }
        </div>
    );
}