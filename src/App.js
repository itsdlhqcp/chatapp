import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/SignIn';
import './styles/main.scss';
import Home from './pages/Home';
import { Switch,Route } from 'react-router';


function App() {
  return (
    <Switch>
      <Route path="/Signin">
        <SignIn />
      </Route>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
