import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({ //Color Theme Material UI
  palette: {
    primary: {
      main: '#033E8C',
    },
    secondary: {
      main: '#155FBF',
    },
    white: {
      main: '#FFFFFF',
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