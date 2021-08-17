import React from "react"
import { useHistory } from "react-router-dom"
import { goToLogin, goToTripList } from "../../route/Coodinates/Coordinates"

export const HomePage = () => {
    const history = useHistory()

    return(
        <div>
        <h1>Home Page</h1>

        <button onClick={goToTripList}>
        ver viagens
        </button>

        <button onClick={goToLogin}>
        area admin
        </button>
        </div>

    )
}

