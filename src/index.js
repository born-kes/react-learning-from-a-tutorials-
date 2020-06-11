import ReactDOM from 'react-dom';
import React from 'react';
// import * as serviceWorker from './serviceWorker';
import {Game} from './game';

ReactDOM.render( <Game /> , document.getElementById('root') );


// serviceWorker.unregister(); // Disable to work offline. This can make it difficult to remove errors
// serviceWorker.register(); //The application will work without internet, but you cannot debug