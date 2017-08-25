import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../containers/App';
import Login from '../containers/Login';
import Auth from '../containers/Auth';
import Home from '../containers/Home';
import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore} from 'react-router-redux'
import store from '../store';
// requireAuth = (nextState, replace) => {
//     if (localStorage.getItem('user') === null) {
//         replace({
//             pathname: '/',
//             state: {nextPathname: nextState.location.pathname}
//         })
//     }
// };

const history = syncHistoryWithStore(createBrowserHistory(), store);

export default (
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Auth onEnter="requireAuth">
                    <Route path='/home' component={Home}/>
                </Auth>
            </Switch>
        </App>
    </Router>
);