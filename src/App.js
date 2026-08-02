import React from 'react'

import Dashboard from "./components/Dashboard"
import {ThemeProvider} from '@material-ui/styles'
import {Theme} from './styles/Theme'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
