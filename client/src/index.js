import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import Landing from './pages/Landing';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Landing} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
