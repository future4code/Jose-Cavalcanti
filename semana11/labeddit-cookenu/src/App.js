import React, { useState } from "react";
import RouterManager from "./routs/Router"
import theme from "./constants/theme"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const token = localStorage.getItem("token")
  const [righButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header righButtonText={righButtonText} setRightButtonText={setRightButtonText} />
        <RouterManager righButtonText={righButtonText} setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
