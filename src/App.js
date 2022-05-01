import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './components/Layout';
// import { dark } from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0077b6'
    },
    secondary: {
      main: '#023e8a'
    },
  },
  typography: {
    fontFamily: 'Work Sans',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
