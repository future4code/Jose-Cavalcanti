import styled from "styled-components";
import Fab from '@material-ui/core/Fab'

export const RecipeListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;

`

export const AddRecipeButton = styled(Fab)`
    position: fixed !important;
    right: 20px;
    bottom: 20px;
    z-index: 3;
`