import React from 'react'
import useProtectedPage from "../../hooks/useProtectedPage"
import { ScreenContainer, LogoImage, InputsContainer } from '../../pages/LoginPage/styled'
import { Button, TextField, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { createRecipe } from "../../requests/recipe"

const AddRecipesPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })


    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear)
    }

    return (
        <ScreenContainer>
            <Typography align={'center'} variant={'h3'} colorPrimary >Cadstre sua receita!</Typography>
            <form onSubmit={onSubmitForm}>
                <InputsContainer>
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"titulo"}
                        variant={"outlined"}
                        margin={"dense"}
                        fullWidth
                        required
                    />
                    <TextField
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={"descrição"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                    <TextField
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={"imagem"}
                        variant={"outlined"}
                        fullWidth
                        margin={"dense"}
                        required
                    />
                </InputsContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                >
                    Adicionar receita
                </Button>
            </form>
        </ScreenContainer>
    )
}

export default AddRecipesPage