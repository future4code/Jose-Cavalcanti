import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToRecipesList } from "../routs/Cordinator";

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goToRecipesList(history)
        }
    }, [history])
}

export default useUnprotectedPage