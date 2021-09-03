import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToodbar } from './styled';
import { goToRecipesList, goToLogin } from "../../routs/Cordinator"
import { useHistory } from 'react-router';

const Header = ({ righButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token")
  const history = useHistory()


  const logout = () => {
    localStorage.removeItem("token")
  }

  const righButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("login")
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
    <AppBar position="static">
      <StyledToodbar>
        <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
        <Button onClick={righButtonAction} color="inherit">{righButtonText}</Button>
      </StyledToodbar>
    </AppBar>
  );
}

export default Header