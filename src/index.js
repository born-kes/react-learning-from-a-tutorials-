import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {TimeBox} from "./components/TimeBox";
import {Music1} from "./components/Music1";
import {Music2} from "./components/Music2";
import {Maps} from "./components/Maps";
import {Chat} from "./components/Chat";
import {Notes} from "./components/Notes";
import {Nav} from "./components/Nav";
import './index.css';
import {Pulpit} from "./components/Pulpit";
import {DataProvider} from "./components/Content/Data";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render( <div>
    <Router>
        <Nav />
        <div>
            <DataProvider>
            <Switch>
                <Route path="/TimeBox" component={TimeBox} />
                <Route path="/Music1" component={()=>(<Music1 />)} />
                <Route path="/Music2" component={()=>(<Music2 />)} />
                <Route path="/Maps" component={()=>(<Maps />)} />
                <Route path="/Chat" component={Chat} />
                <Route path="/Notes" component={Notes} />
                <Route path="/" exact >
                    <div className={`container`}>
                        <TimeBox />
                        <Music2 />
                        <Music1 />
                        <Maps />
                        <Chat />
                        <Pulpit />
                        <Notes />
                    </div>
                </Route>
            </Switch>
            </DataProvider>
        </div>
    </Router>
</div> , document.getElementById('root') );


// serviceWorker.unregister(); // Disable to work offline. This can make it difficult to remove errors
// serviceWorker.register(); //The application will work without internet, but you cannot debug