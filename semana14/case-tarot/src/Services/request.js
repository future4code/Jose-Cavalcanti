import axios from "axios"

export const GetTarot = (setTarot) => {

    axios.get("tarot.json")
        .then((res) => {
            setTarot(res.data)   
            console.log(res)
        })
        .catch((err) => {
            console.log(err.data)
        })
}