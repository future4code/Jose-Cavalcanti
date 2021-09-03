import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialDtata, url) => {
    const [data, setData] = useState(initialDtata)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
            alert('Erro, tente novamente')
        })
    }, [url])

    return(data)
}

export default useRequestData