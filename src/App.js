import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';

const theme = createMuiTheme({
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
