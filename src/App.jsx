import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import Home from '../src/Containers/HomeScreen';
import Snackbar from './Components/Snackbar';
import Footer from './Components/Footer';
import useSnackbar from './Hooks/useSnackbar';


const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const renderContent = (snackbarReducer) => (
  <Home {...snackbarReducer}/>
);

const renderSnackbar = (snackbarReducer) => (
  <Snackbar {...snackbarReducer}/>
)

const renderFooter = () => (
  <Footer/>
)

function App() {
  const [isLightMode] = React.useState(true);
  const snackbarReducer = useSnackbar();
  
  return (
    <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
      <Paper elevation={0} sx={{ display: 'flex', flexDirection:'column', width: '100vw', minHeight: '100vh' }} square>
        <Container maxWidth='sm' sx={{ minHeight: '80vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          {renderContent(snackbarReducer)}
          {renderSnackbar(snackbarReducer)}
        </Container>
      {renderFooter()}
      </Paper>
    </ThemeProvider>
  );
}

export default App;