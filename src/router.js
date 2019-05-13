import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import One from "./routes/one"
import Two from "./routes/two"

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Switch>
            <Route path="/two"  component={One}></Route>
            <Route path="/a" exact component={Two}></Route>
        </Switch>  
    </Router>
  );
}
 
export default RouterConfig;