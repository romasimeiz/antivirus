import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import App from '../containers/App';
import Login from '../containers/Login';
import Auth from '../containers/Auth';
import Home from '../containers/Home';
import Users from '../containers/Users';
import Files from '../containers/Files';
import Projects from '../containers/Projects';
import ProjectForm from '../containers/ProjectForm';
import NotFound from '../components/NotFound';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';




export default (
    <App>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Auth>
                    <Switch>
                        <Route path='/home' component={Home}/>
                        <Route path='/users' component={Users}/>
                        <Route exact path='/projects' component={Projects} />
                        <Route path='/projects/:projectId/files' component={Files}/>
                        <Route path='/projects/:projectId/update' component={ProjectForm}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Auth>
                <Files>
                </Files>
            </Switch>
        </ConnectedRouter>
    </App>
);