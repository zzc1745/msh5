import React, { Component } from 'react';
import PageHeader from './lib/PageHeader';
import '../App.css';
import '../css/lib/login.less';

class PageC extends Component {
	constructor(props) {
		super(props)
		this.state={
			account:'',
			passward:''
		}
	}

	// 组件装载之后调用
	componentDidMount() {

	}

	//渲染
	render() {
		return (
			<div>
				<div className="wrap">
					<div className='login-title'>
						<h3>品牌私域流量立体营销解决方案</h3>
						<h4>让品牌生意不再难</h4>
					</div>
					<div className='loginform'>
						<div><input className='account' value={this.account} placeholder='手机号/用户名/邮箱'/></div>
						<div><input className='passward' value={this.passward} placeholder='密码'/></div>
					</div>
				</div>
			</div>);
	}

	// 组件被卸载
	componentWillUnmount() {

	}
}

export default PageC;
