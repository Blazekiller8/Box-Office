import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navs from './compnents/Navs';
import Actors from './pages/Actors';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navs />
    <Switch >
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/actors">
        <Actors />
      </Route>
      <Route>
        This is 404 Page not Found!
      </Route>
    </Switch>
    </div>
  );
}

export default App;
