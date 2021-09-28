import React from 'react';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch >
      <Route exact path="/">
        This is Homepage
      </Route>
      <Route exact path="/actors">
        This is Actor
      </Route>
      <Route>
        This is 404 Page not Found!
      </Route>
    </Switch>
  );
}

export default App;
