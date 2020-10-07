import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/login' exact component={Login} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
