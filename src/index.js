import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Router,
  browserHistory
} from 'react-router';


import { FixedDataTable } from './fixed-data-table';

import App from './App';
import './index.css';


const routes = (
  <Route path="/" component={App}>
    <Route path="/fixed-data-table" component={FixedDataTable}/>
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory}>
    { routes }
  </Router>,
  document.getElementById('root')
);
