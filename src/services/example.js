import request from '../utils/request';
// 接口文件

// get请求
export function query() {
  return request('http://localhost:8062/sky/menu/btnList');
}
// post请求
export function add(params) {
  return request('http://localhost:8062/sky/menu/btnList', {
    method: 'POST', 
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
});
}
