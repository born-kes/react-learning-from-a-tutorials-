import React from "react";
import Home  from "../Page/Home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const MyRoutes = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Home/">Page Home</Link>
                    </li>
                </ul>
            </nav>
        <Switch>
            <Route path="/Todo">
            </Route>
            <Route path="/Game">
            </Route>
            <Route path="/Home">
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </Router>
    );
}

export default MyRoutes;