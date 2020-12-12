import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import QuizList from './containers/QuizList'
import Quiz from './containers/Quiz'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={QuizList} />
        <Route path="/quiz/:id" component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
