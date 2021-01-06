import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import BlogPage from './components/HomeEvent';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BlogPage />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
