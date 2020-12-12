import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import MainList from './containers/MainList'
import Main from './containers/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainList} />
        <Route path="/quiz/:id" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
