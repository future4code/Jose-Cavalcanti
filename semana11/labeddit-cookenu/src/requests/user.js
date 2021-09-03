import axios from 'axios'
import { BASE_URL } from '../constants/BASE_URL'
import { goToRecipesList } from '../routs/Cordinator'

export const login = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => alert(err.response.data.massage))
}

export const singUp = (body, clear, history, setRightButtonText) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => alert(err.response.data.massage))
}