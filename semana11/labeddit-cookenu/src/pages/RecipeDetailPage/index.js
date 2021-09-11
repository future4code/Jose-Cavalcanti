import { Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { RecipeListContainer } from '../RecipesListPage/styled'
import { RecipeImage, ScreenContainer } from './styled'

const RecipeDetailpage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    console.log(recipe)

    return (
        <ScreenContainer>
            {recipe &&
                <RecipeListContainer>
                    <RecipeImage src={recipe.image}/>
                    <Typography align={'center'}>{recipe.description}</Typography>
                    <Typography gutterBottom align={"center"} variant={'h5'} color={'primary'}>{recipe.title}</Typography>
                </RecipeListContainer>}
        </ScreenContainer>
    )
}
export default RecipeDetailpage