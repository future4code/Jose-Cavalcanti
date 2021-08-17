import React, { useState } from 'react';
import styled from "styled-components"
import { RouteManager } from "./route/Router/Router"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppContainer>

      <RouteManager/>

    </AppContainer>
  );
}

export default App;