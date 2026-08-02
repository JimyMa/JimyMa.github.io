import React from 'react'

import Dashboard from "./components/Dashboard"
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {ThemeProvider} from '@material-ui/styles'
import {Theme} from './styles/Theme'


function App() {
  return (
    <div className="App">

    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          {/* <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route> */}
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
