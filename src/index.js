import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


// global style
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './components/style/Main.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();