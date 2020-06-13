import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import TestParams from "./components/TestParams";

export default function Home() {
    let match = useRouteMatch();
    if(match.url ==='/') match.url ='';
    if(match.path ==='/') match.path ='';

    return (
        <div>
            <h2>Sub Menu</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/firstTopic`}>
                        First Topic
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/components/secondTopic`}>
                        Second Topic
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/components/123`}>Components</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:category/:topicId`}>
                    <TestParams />
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <TestParams />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.1</h3>

                </Route>
            </Switch>
        </div>
    );
}