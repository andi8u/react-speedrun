import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//only one root component has to be rendered
//the <App is imported from app.js and the JS part can be omitted because it is added automatically but only for JS files
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
