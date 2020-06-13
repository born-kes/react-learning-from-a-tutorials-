import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render( <div>
            <App />
</div> , document.getElementById('root') );


// serviceWorker.unregister(); // Disable to work offline. This can make it difficult to remove errors
// serviceWorker.register(); //The application will work without internet, but you cannot debug