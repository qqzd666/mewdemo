import React from 'react';
import dva from 'dva';
import './index.scss';
// import createHistory from 'history/createBrowserHistory'
// 1. Initialize
import './common/index.css';
import {Router} from 'dva/router';

import routes from './routes/config';
import RouterView from './routes';

let app = dva();

app.router(function({history}){
    return(<Router history={history}>
        <RouterView routes={routes} />
    </Router>)
})

app.start("#root");