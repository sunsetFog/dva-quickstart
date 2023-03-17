// React应该是底层在调用，得引入
import React, {useEffect} from 'react';
import { connect } from 'dva';
import { Route, Switch, withRouter } from 'dva/router';
import IndexPage from '../pages/welcome/IndexPage.js';
import Login from '../pages/login/index';
import Frog from '../pages/frog/index';
// 引入接口
import {query} from '../services/example'

import PropTypes from 'prop-types'



// 组件和models一起懒加载   全局app.model就不用写了
// import dynamic from 'dva/dynamic';
// import {app} from '../index';

// const UserPageComponent = dynamic({
//   app,
//   models: () => [
//     import('../models/example'),
//   ],
//   component: () => import('../pages/frog/index'),
// });


// 有类组件和函数组件
function App(props) {
    console.log("App-props", props);
    const {state, dispatch, history} = props;
    const {list} = state;
    
    // 发送接口获得数据，并把数据存到vuex里
    useEffect(()=>{
        dispatch({
            type: 'example/getData',
            payload: []
        })
        // getData();
    }, []);
    async function getData() {
        const data = await query();
        console.log("后端数据：", data);
    }

    
    // 删除函数
    const deleteList = (index) => {
        const arr = [...list];
        arr.splice(index, 1);
        console.log("-arr-", arr);
        dispatch({
            type: 'example/deleteList',
            payload: arr
        })

        // ES6 入门教程  https://es6.ruanyifeng.com/
    }

    const jumpWay = (value) => {
        if(value == 1) {
            history.push('/login');
        }else if(value == 2){
            dispatch({
                type: 'example/toPage',
                payload: ''
            })
        }
    }
    return (
      <section>
          +++App.vue+++
          <br/>

          <ul>
              {
                  list && list.length > 0 ? list.map(function(item,index){
                      return <li key={item.id}>
                      {item.name}
                      <button onClick={()=>deleteList(index)}>删除</button>
                      </li>
                  }):null
              }
          </ul>
          <button onClick={()=>jumpWay(1)}>跳转登录页</button>
          <button onClick={()=>jumpWay(2)}>跳转青蛙页</button>

          <div>
                +++++++++++++++++++++++++++二级路由++++++++++++++++++++++++++++++++++
          </div>

            {/* 
                study: 二级路由，方式1
            */}
            <Switch>
                <Route path="/IndexPage" exact component={IndexPage} ></Route>
                <Route path="/login" exact component={Login} ></Route>
                <Route path="/frog" exact component={Frog} ></Route>
                {/* <Route path="/IndexPage" exact component={React.lazy(()=>import('../pages/welcome/IndexPage.js'))} ></Route>
                <Route path="/IndexPage" exact component={UserPageComponent} ></Route> */}
            </Switch>


      </section>
    );
  }

// 设置属性默认值
App.defaultProps = {
    colors: '蓝色'
};
// 设置属性类型约束
App.propTypes = {
    colors: PropTypes.string
};

function mapStateToProps(params) {
    console.log("-mapStateToProps-", params);
    return {
        state: params.example
    }
}
// props对象加入了state,dispatch,history属性   history用于跳转
export default connect(mapStateToProps)(withRouter(App));