import React from 'react'
import { useHistory } from 'react-router-dom'
import { ScreenContainer, LogoImage, InputsContainer, SingUpButtonContainer } from './styled'
import LoginPageLogo from "../../assets/LoginPageLogo.png"
import { Button, TextField } from '@material-ui/core'
import useForm from "../../hooks/useForm"
import { goToSingUp } from "../../routs/Cordinator"
import { login } from "../../requests/user"
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({setRightButtonText }) => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)

    }


    return (
        <ScreenContainer>
            <LogoImage src={LoginPageLogo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"email"}
                        variant={"outlined"}
                        margin={"dense"}
                        fullWidth
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"normal"}
                    >
                        Fazer Login!
                    </Button>
                </form>
            </InputsContainer>
            <SingUpButtonContainer>
                <Button
                    onClick={() => goToSingUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                >
                    Não possi conta ? Cadastre-se!
                </Button>
            </SingUpButtonContainer>
        </ScreenContainer>
    )
}
export default LoginPage