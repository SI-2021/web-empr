import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#033E8C',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#155FBF',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}