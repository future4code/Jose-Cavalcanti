import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secundaryColor, ternaryColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: ternaryColor,
    },
    text: {
        primary: secundaryColor
    }
  },
});

export default theme