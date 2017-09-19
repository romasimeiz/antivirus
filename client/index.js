import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.html';
import './assets/css/style.css';

import store from './store';
import router from './router';

ReactDOM.render(
    <Provider store={store}>
            {router}
    </Provider>,
    document.getElementById('root')
);