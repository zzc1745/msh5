import React, { Component } from 'react';
// import PageHeader from './lib/PageHeader';
import '../App.css';
import '../css/lib/login.less';
import zhanghu from '../images/zhanghu.png';
import mima from '../images/mima.png';
import shouji from '../images/shouji.png';
// import appCode from '../images/appCode.png';

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
	loginBtn=()=>{
		console.log(this.state.account)
		console.log(this.state.passward)

	}
	onChangeAccount=(e)=>{
		const value = e.target.value;
		this.setState({
			account:value
		})
	}
	onChangePass=(e)=>{
		const value = e.target.value;
		this.setState({
			passward:value
		})
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
							<img src={zhanghu} alt=''></img>
							<input className='account' value={this.account} onChange={this.onChangeAccount.bind(this)} placeholder='手机号/用户名/邮箱' />
						</div>
						<div>
						    <img src={mima} alt=''></img>
							<input className='passward' value={this.passward} onChange={this.onChangePass.bind(this)} placeholder='密码' />
						</div>
						<div><button className='loginbtn' onClick={this.loginBtn}>登  录</button></div>
					</div>
					<div className='bottomcode'>
						<div className='bottom-inner'>
						    <img className='bottom-code' alt='' src='https://dev.icemdata.com/test/app.png'></img>
							<div className='bottom-line'>
							    <img className='bottom-shouji' alt='' src={shouji}></img>
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
