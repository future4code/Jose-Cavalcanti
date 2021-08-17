import React, { useEffect, useState } from 'react';
import { Avatar} from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import styled from "styled-components";
import { BaseURL } from "../../components/BaseURL/BaseURL"
import axios from 'axios';


const ListaContainer = styled.div`
display: flex;
gap: 1em;
align-items: center;
padding: 0.5em 1em ;
`



export default function ListaMatches(props) {
    const [lista, setLista] = useState([])

    useEffect(() => {
        pegaMatch()
    }, [lista, setLista])

    const pegaMatch = () => {
        const URL = `${BaseURL}/matches`
        axios.get(URL)
        .then((res) => {
            setLista(res.data.matches)
        })
        .catch((err) => {
            console.alert(err.message)
        })
    }

    return(
        <div>
            

        {
        lista.length ? 
        (lista.map((person)=> {
            return(
                <ListaContainer>
                <Avatar 
                name={personalbar.name}
                src={personalbar.photo}
                />

                <Text fontSize={32} textAlign={`center`}>
                {person.name}
                </Text>
                </ListaContainer>
            )
            })
        )
        :
            <Text fontSize={32} textAlign={`center`}>
                sem match por em quanto :/
            </Text>
        }
        </div>

    )
}

