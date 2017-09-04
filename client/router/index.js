import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import App from '../containers/App';
import Login from '../containers/Login';
import Auth from '../containers/Auth';
import Home from '../containers/Home';
import Users from '../containers/Users';
import NotFound from '../components/NotFound';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

// requireAuth = (nextState, replace) => {
//     if (localStorage.getItem('user') === null) {
//         replace({
//             pathname: '/',
//             state: {nextPathname: nextState.location.pathname}
//         })
//     }
// };


export default (
    <App>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Auth>
                    <Switch>
                        <Route  path='/home' component={Home}/>
                        <Route  path='/users' component={Users}/>
                        <Route  component={NotFound}/>
                    </Switch>
                </Auth>

            </Switch>
        </ConnectedRouter>
    </App>
);