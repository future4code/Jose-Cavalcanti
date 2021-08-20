import { useTripsLists, deleteTrip } from "../../hooks/requests";
import React from "react";
import { goToTripsDetails } from "../../route/Coordinates/Coordinates";
import { useHistory } from "react-router-dom"
import { AdminList, TripName, TripCard} from "../../constants/Styled/Styled"
import { ImBin2 } from "react-icons/im";

export default function AdminTripsList() {
  const trips = useTripsLists();
  const history = useHistory()

  return (
    <div>
      {trips.length !== 0
        ?
        trips.map((trip) => {
          return (
            <AdminList key={trip.id}>
              <TripName onClick={() => { goToTripsDetails(history, trip.id) }} > Viagem: {trip.name}</TripName>

              <button
                onClick={() => deleteTrip(trip.id)}
              ><ImBin2/>
              </button>
            
            </AdminList>
          );
        })
        : 
        <TripCard> Não há viagens disponíveis </TripCard>
      }
    </div>
  );
}