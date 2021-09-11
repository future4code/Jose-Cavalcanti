import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import useProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/BASE_URL.js'
import RecipeCard from "../../components/RecipeCartd"
import { RecipeListContainer, AddRecipeButton } from "../RecipesListPage/styled"
import { Add } from '@material-ui/icons'
import { goToAddRecipes, goToRecipeDetail } from '../../routs/Cordinator'
import { useHistory } from 'react-router'



const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = (id) => {
        goToRecipeDetail(history, id)
    }

    const recipesCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
            />
        )
    })

    return (
        <RecipeListContainer>
            {recipesCards}
            <AddRecipeButton
                color={"primary"}
                onClick={() => goToAddRecipes(history)}
            >
                <Add />
            </AddRecipeButton>
        </RecipeListContainer>
    )
}
export default RecipesListPage