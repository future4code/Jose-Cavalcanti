import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import RouteManager from "./route/Router/Router"

const theme = extendTheme({
  colors: {
    brand: {
      50: "#A4EA73",
      100: "#A4EA73",
      500: "#A4EA73",
    }
  }
});

function App() {
  return (

    <ChakraProvider theme={theme}>

      <RouteManager/>
      
    </ChakraProvider>
  );
}

export default App;