import React from 'react'
import { useHistory } from 'react-router-dom'
import { ScreenContainer, LogoImage, InputsContainer } from '../../pages/LoginPage/styled'
import LoginPageLogo from "../../assets/LoginPageLogo.png"
import { Button, TextField } from '@material-ui/core'
import useForm from "../../hooks/useForm"
import { singUp } from '../../requests/user'

const SingUpPage = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({ name:"", email: "", password: "" })
    const history = useHistory()
    const onSubmitForm = (event) => {
        event.preventDefault()
        singUp(form, clear, history, setRightButtonText)
    }

    return (
        <ScreenContainer>
            <LogoImage src={LoginPageLogo} />
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"name"}
                        variant={"outlined"}
                        margin={"dense"}
                        fullWidth
                        required
                        type={"name"}
                    />
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
                        Cadastrar
                    </Button>
                </form>
            </InputsContainer>
        </ScreenContainer>
    )
}
export default SingUpPage