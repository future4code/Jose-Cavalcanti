import React from "react";
import { TripCard } from "../../constants/Styled/Styled";

export default function TripDetailsCard(props) {
    const trip = props.trip

    return (
        <div>
            {trip &&
                <TripCard >
                    <p> Nome:{trip.name}</p>
                    <p> Descrição: {trip.description}</p>
                    <p> Planeta: {trip.planet}</p>
                    <p> Duração:{trip.durationInDays}</p>
                    <p> Data: {trip.date}</p>
                </TripCard>
            }
        </div>
    );
}