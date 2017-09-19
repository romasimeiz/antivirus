import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BreadcrumbsProvider} from 'react-breadcrumbs-dynamic';

import './index.html';
import './assets/css/index.css';

import store from './store';
import router from './router';

ReactDOM.render(
    <Provider store={store}>
            {router}
    </Provider>,
    document.getElementById('root')
);