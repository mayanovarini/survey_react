import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting/Greeting';
import App from '../src/App';
import NotFound from './NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Greeting} />
      <Route path="/score" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
