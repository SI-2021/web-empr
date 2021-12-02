import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  //Color Theme Material UI
  palette: {
    primary: {
      main: '#033E8C'
    },
    secondary: {
      main: "#155FBF"
    },
    white: {
      main: "#FFFFFF"
    },
    background: {
      main: "#141414"
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider >
  );
}
