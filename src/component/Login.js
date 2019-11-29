import React, { Component } from 'react';
import PageHeader from './lib/PageHeader';
import '../App.css';
import '../css/lib/login.less';
import zhanghu from '../images/zhanghu.png';
import mima from '../images/mima.png';
import shouji from '../images/shouji.png';
import appCode from '../images/appCode.png';

class PageC extends Component {
	constructor(props) {
		super(props)
		this.state = {
			account: '',
			passward: ''
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
						<div>
							<img src={zhanghu}></img>
							<input className='account' value={this.account} placeholder='手机号/用户名/邮箱' />
						</div>
						<div>
						    <img src={mima}></img>
							<input className='passward' value={this.passward} placeholder='密码' />
						</div>
						<div><button className='loginbtn'>登  录</button></div>
					</div>
					<div className='bottomcode'>
						<div className='bottom-inner'>
						    <img className='bottom-code' src={appCode}></img>
							<div className='bottom-line'>
							    <img className='bottom-shouji' src={shouji}></img>
								<span>手机APP下载</span>
							</div>
						</div>
					</div>
				</div>
			</div>);
	}

	// 组件被卸载
	componentWillUnmount() {

	}
}

export default PageC;
