import React from "react";
import { TripCard } from "../../constants/Styled/Styled";
export default function AprovedCandidatesCard(props) {

    const candidates = props.trip.approved;

    return (
        <div>
            {candidates ?
                candidates.map((candidate) => {
                    return (

                        <TripCard key={candidate.id}>
                            <p>Nome: {candidate.name} </p>
                        </TripCard>

                    );
                })
                : 
                <TripCard>Não há candidatos aprovados</TripCard>
            }
        </div>
    );
}