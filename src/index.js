import dva from 'dva';
import './index.css';


// 1. Initialize 初始化dva
export const app = dva();

// 2. Plugins
// app.use({});

// 3. Model 引入数据层   app.model来自官网的api
app.model(require('./models/example').default);

/*
require('./models/example').default
等于  import Example from './models/example';  app.model(Example);
 */

// 4. Router 注册路由
app.router(require('./router').default);

// 5. Start 启动项目
app.start('#root');
