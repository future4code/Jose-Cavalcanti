import { useTripsLists } from "../../hooks/requests";
import React from "react";
import { TripCard } from "../../constants/Styled/Styled";

export function TripsList() {
  const trips = useTripsLists();

  return (
    <div>

      {trips.length ?
        trips.map((trip) => {
          return (
            <TripCard key={trip.id}>
              <p> Nome:{trip.name}</p>
              <p> Descrição: {trip.description}</p>
              <p> Planeta: {trip.planet}</p>
              <p> Duração:{trip.durationInDays}</p>
              <p> Data: {trip.date}</p>
            </TripCard>
          
          );
        }) 
        :
        <TripCard>Carregando....</TripCard>
      
      }
    </div>
  );
}