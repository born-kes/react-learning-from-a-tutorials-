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
import {MusicProvider, NoisliProvider} from "./components/Content/waveData";
import {MapsProvider} from "./components/Content/mapsData";
import {Pulpit} from "./components/Pulpit";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render( <div>
    <Router>
        <Nav />
        <div>
            <Switch>
                <Route path="/TimeBox" component={TimeBox} />
                <Route path="/Music1" component={()=>(<NoisliProvider><Music1 /></NoisliProvider>)} />
                <Route path="/Music2" component={()=>(<MusicProvider><Music2 /></MusicProvider>)} />
                <Route path="/Maps" component={()=>(<MapsProvider><Maps /></MapsProvider>)} />
                <Route path="/Chat" component={Chat} />
                <Route path="/Notes" component={Notes} />
                <Route path="/" exact >
                    <div className={`container`}>
                        <TimeBox />
                        <MusicProvider><Music2 /></MusicProvider>
                        <NoisliProvider><Music1 /></NoisliProvider>
                        <MapsProvider><Maps /></MapsProvider>
                        <MapsProvider><Chat /></MapsProvider>
                        <Pulpit />
                        <Notes />
                    </div>
                </Route>
            </Switch>
        </div>
    </Router>
</div> , document.getElementById('root') );


// serviceWorker.unregister(); // Disable to work offline. This can make it difficult to remove errors
// serviceWorker.register(); //The application will work without internet, but you cannot debug