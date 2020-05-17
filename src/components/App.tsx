import * as React from 'react';
import {FunctionComponent} from "react";
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

import Root from "./Root";
import Test from './Test';

const App: FunctionComponent = () => {
    return (
        <>
            <div>
                <Router>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/test">Test</Link>
                </li>
                </ul>

                <hr />
                         <Switch>
                            <Route path='/' exact component={Root} />
                            <Route path='/test' component={Test} />
                            {/* <Redirect from='/' to='/home'/> */}
                        </Switch>
                        <footer >
                                FOOTER
                        </footer>
                </Router>
           
            </div>
        </>
    )
};

export default App;