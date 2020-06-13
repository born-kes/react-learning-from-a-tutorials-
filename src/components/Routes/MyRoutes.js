import React from "react";
import Home  from "../Page/Home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Todo from "../Page/Todo/Todo";

const MyRoutes = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Home">Page Home</Link>
                    </li>
                    <li>
                        <Link to="/Todo">ToDo list</Link>
                    </li>
                </ul>
            </nav>
        <Switch>
            <Route path="/Todo">
                <Todo />
            </Route>
            <Route path="/Game">
            </Route>
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </Router>
    );
}

export default MyRoutes;