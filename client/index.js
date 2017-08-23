import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import router from './router/router';
import store from './store';

import 'index.html';

ReactDOM.render(
<Provider store={store}>
    {router}
    </Provider>,
document.getElementById('root')
);
