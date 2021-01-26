import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AppReactadmin from './components/ReactAdmin/AppReactadmin';

import './index.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppReactadmin/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
