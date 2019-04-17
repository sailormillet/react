// 获得数据
import React, {Component} from 'react'
// import {Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {addGum, addGumAsync} from "../../index.redux";

class Test2 extends Component {
    render() {
        let num = this.props.num
        return (
            <div className="test01">
            Test2
                <p>{num}</p>
                <button onClick={this.props.addGum}>add</button>
                <button onClick={this.props.addGumAsync}>延迟增加</button>
            </div>
        )
    }
}
// 获得数据
const mapStateToProps = (state) => {
    return {num: state}
}
// 获得方法,方法是上面倒入的 //将action的所有方法绑定到props上
const mapDispatchToProps = {addGum, addGumAsync}
// connect 第一个是获得数据源，第二个是获得方法源
export default connect(mapStateToProps, mapDispatchToProps)(Test2)
