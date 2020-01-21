import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//only one root component has to be rendered
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
