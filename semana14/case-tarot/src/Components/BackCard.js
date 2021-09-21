import { useContext, useState } from "react"
import { ContextoCartas } from "../Globals/GlobalContext"
import { Tabuleiro, Cartas } from "./styled"
import backcard from '../assets/SOUL-CARDS.png'


export const BackCard = ({tarot}) => {
    // const { URL_BACK, URL_BASE, tarot, } = useContext(ContextoCartas)

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [texto, setTexto] = useState("")
    const [lado, setLado] = useState(false);


    const cards = tarot.cards;

    const sorteio = () => {
        const i = Math.floor(Math.random() * 10)
        setName(cards[i].name)
        setImage(cards[i].image)
        setTexto(cards[i].texto)
        setLado(!lado)

    }


    const showBack = tarot && tarot.cards && tarot.cards.map((card) => {
        return <Cartas onClick={sorteio} key={card.name}>
            <p></p>
            <img src={backcard} />
        </Cartas>
    })

    return (


        <Tabuleiro>
            {lado ?
                <Cartas onClick={sorteio}>
                    <p>{name}</p>
                    <img src={tarot.imagesUrl + image} />
                    <p>Se a carta {name} apareceu
                        <br />para você é por que{texto}</p>

                </Cartas> :
                showBack}
        </Tabuleiro>


    )

}