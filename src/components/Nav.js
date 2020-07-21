// @flow
import React, {Component} from 'react'
import {Link} from "react-router-dom";

export class Nav extends Component {
    render() {
        return (
            <div id={`Nav`}>
                <ul>
                    <li>
                        <Link to="/">... </Link>
                    </li>
                    <li>
                        <Link to="/TimeBox">TimeBox </Link>
                    </li>
                    <li>
                        <Link to="/Music1"> Music1</Link>
                    </li>
                    <li>
                        <Link to="/Music2">Music2 </Link>
                    </li>
                    <li>
                        <Link to="/Maps"> Maps</Link>
                    </li>
                    <li>
                        <Link to="/Chat"> Chat</Link>
                    </li>
                    <li>
                        <Link to="/Notes"> Notes</Link>
                    </li>
                </ul>
            </div>
        )
    }
}