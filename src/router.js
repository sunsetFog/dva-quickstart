import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import App from './pages/app.js';






function RouterConfig({ history }) {
  return (
    // 加入路由懒加载
    <React.Suspense fallback={<div>加载中</div>}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} >
            
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default RouterConfig;
