import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

// 有类组件和函数组件
function Login(props) {

    return (
      <section>
          +++登录页面+++
      </section>
    );
  }
  
  Login.propTypes = {
  };

  function mapStateToProps(params) {
      console.log("-mapStateToProps-", params);
      return {
          state: params.example
      }
  }
  // props对象加入了state,dispatch,history属性   history用于跳转
  export default connect(mapStateToProps)(withRouter(Login));