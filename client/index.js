import React from 'react';
import ReactDOM from 'react-dom';
import 'index.html';
import { Provider } from 'react-redux';

import store from './store';
import router from './router';

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
);