import React, {Component} from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

import styles from './frog.css';

// 类组件
class Frog extends Component {
    /*
        数据
     */
    state = {

    }
    /*
        完成了React数据的初始化，还未渲染DOM，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
     */
    constructor(props) {
        super(props);
        console.log("--constructor--数据的初始化");
    }
    /*
        组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
     */
    componentDidMount() {
        console.log("--componentDidMount--渲染完成");
    }
    /*
        完成组件的卸载和数据的销毁
     */
    componentWillUnmount () {
        console.log("--componentWillUnmount--卸载");
    }
    render() {

      return (
        <section className={styles.radish+' yaya'}>
            +++青蛙+++
        </section>
      );
    }
}


function mapStateToProps(params) {
    console.log("-mapStateToProps-", params);
    return {
        state: params.example
    }
}
export default connect(mapStateToProps)(withRouter(Frog));