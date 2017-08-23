import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../containers/App';

function requireAuth(nextState, replace) {
    if (localStorage.getItem('user') === null) {
        replace({
            pathname: '/',
            state: {nextPathname: nextState.location.pathname}
        })
    }
}

export default (
    <Router>
        <Route path='/' component={App}>
        </Route>
    </Router>
);