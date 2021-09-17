import React, { useEffect, useContext, useState } from 'react'
import { Text } from "@chakra-ui/react"
import { Tabuleiro, Cartas } from './styled'
import { ContextoCartas } from "../Globals/GlobalContext"
// import backcard from '../assets/SOUL-CARDS.PNG'


export const FrontCard = ({tarot}) => {
    // const { URL_BASE, tarot, getInfo } = useContext(ContextoCartas)
    
    // useEffect(() => {
    //     getInfo()
    // }, [])

    const showCard = tarot && tarot.cards && tarot.cards.map((card) => {
        return <Cartas key={card.name}>
            <Text>
                {card.name}
            </Text>
            <img src={tarot.imagesUrl + "/" + card.image} />
        </Cartas>
    })

    return (
        <Tabuleiro>
            {showCard}
        </Tabuleiro>
    )
}