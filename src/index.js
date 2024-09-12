import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {TimeRulerBox} from "./components/TimeRulerBox";
import {Music1} from "./components/Music1";
import {Music2} from "./components/Music2";
import {Maps} from "./components/Maps";
import {Chat} from "./components/Chat";
import {Notes} from "./components/Notes";
import './index.css';
import {Pulpit} from "./components/Pulpit";
import {DataProvider} from "./components/Content/Data";
import SliderBox from "./components/Slider/SliderBox";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render( <div>
    <Router>
            <DataProvider>
            <Switch>
                <Route path="/" >
                    <div className={`container`}>
                        {/*<React.StrictMode>*/}
                        <TimeRulerBox />
                        <Pulpit />
                        <SliderBox type='left' name='Maps'><Maps /></SliderBox>
                        <SliderBox type='left' name='Notes'><Notes /></SliderBox>
                        <SliderBox type='right' name='Dzwięki'><Music1 /></SliderBox>
                        <SliderBox type='right' name='Muzyka'><Music2 /></SliderBox>

                        <SliderBox type='right' name='Chat'><Chat /></SliderBox>
                        {/*</React.StrictMode>*/}
                    </div>
                </Route>
            </Switch>
            </DataProvider>
    </Router>
</div> , document.getElementById('root') );


// serviceWorker.unregister(); // Disable to work offline. This can make it difficult to remove errors
// serviceWorker.register(); //The application will work without internet, but you cannot debug