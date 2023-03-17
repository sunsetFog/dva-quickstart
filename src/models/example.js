// 数据流
// 引入接口
import {query} from '../services/example';
// dva/router在官网API
import { routerRedux } from 'dva/router';
export default {

  namespace: 'example',// 命名空间，引入vuex用的名字

  state: {// 数据
    water: '水',
    // 数据流
    list: [
      {
        id: 1,
        name: "小芹"
      },
      {
        id: 2,
        name: "晓红"
      }
    ]
  },
  // 订阅 监听action调用
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // 调用其他models的方法   需要命名空间
      // dispatch({
      //     type: '***/way',
      //     payload: ''
      // })
    },
  },
  // 业务逻辑  可异步，等于vue的action
  effects: {
    *getData({ payload }, { call, put }) {
      // 调用接口，异步操作
      const data = yield call(query);
      // 调用reducers方法
      yield put({ type: 'save', payload: data.data.data });
    },
    *deleteList({ payload }, { call, put }) {
      console.log("顺序1-入参=", payload);
      // 调用reducers方法
      yield put({ type: 'update', payload });
      // 调用effects内部方法，type不需要拼接命名空间   yield put({ type: 'example/getData' });
      // yield put({ type: 'getData' });
    },
    // 没有history,用routerRedux跳转  routerRedux返回是action，要用put
    *toPage({ payload }, { call, put }) {
      console.log("toPage");
      yield put(routerRedux.push('/frog'));
    }
  },
  // 更新state数据  等于vue的mutation    effects和reducers都是用dispatch调
  reducers: {
    save(state, action) {
      console.log("后端数据2：", action.payload);
      return { ...state, fish: action.payload };
    },
    update(state, action) {// action可写成{ payload }
      console.log("顺序2-入参=", action);
      return { ...state, list: action.payload };
    },
  },

};
