import {useLayoutEffect} from "react"
import { useHistory } from "react-router-dom";
import { goToLogin } from "../route/Coordinates/Coordinates";

export default function useProtectedPage() {
    const history = useHistory();

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token");
        if (!token) {
            goToLogin(history)
        }
    }, [history])
}