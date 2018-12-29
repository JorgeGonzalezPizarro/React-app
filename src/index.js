import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Characters from './Characters';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Characters title="Jorge" state="Dead" gender="Male" chapters ="1"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
