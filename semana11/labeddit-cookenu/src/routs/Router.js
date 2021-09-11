import React from 'react'
import { Switch, Route } from "react-router-dom"
import LoginPage from '../pages/LoginPage'
import AddRecipesPage from "../pages/AddRecipesPage"
import RecipeDetailPage from "../pages/RecipeDetailPage"
import RecipeListPage from "../pages/RecipesListPage"
import SingUpPage from "../pages/SingUpPage"
import ErrorPage from "../pages/ErrorPage"

const RouterManager = ({setRightButtonText }) => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginPage setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path="/cadastro">
                <SingUpPage setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path="/adicionar-receita">
                <AddRecipesPage />
            </Route>
            <Route exact path="/detalhe/:id">
                <RecipeDetailPage />
            </Route>
            <Route exact path="/">
                <RecipeListPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}
export default RouterManager