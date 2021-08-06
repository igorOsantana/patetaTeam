import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MapActionProps } from './components/MapAction';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import './services/firebase';

import { GetStarted } from './pages/GetStarted';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';
import { Team } from './pages/Team';

import { PrivateRoute } from './routes/PrivateRoute';

import { LightTheme } from './global/themes/light';
import GlobalStyle from './global/styles/global';

export type ParamsRoute = MapActionProps;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ThemeProvider theme={LightTheme}>
          <GlobalStyle />
          <Switch>
            <Route path='/' exact component={GetStarted} />
            <Route path='/sign-in' exact component={SignIn} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/profile' exact component={Profile} />
            <PrivateRoute path='/team' exact component={Team} />
          </Switch>
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
};

export default App;
