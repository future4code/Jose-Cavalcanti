import React from "react";
import { Select } from "../../constants/Styled/Styled";

export function PlanetsList(props) {

    return (
        <Select
            required
            name="planet"
            value={props.planet}
            onChange={props.onChange}
            placeholder="Escolha um planeta">

            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno"> Netuno</option>

        </Select>
    )
}