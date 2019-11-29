import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable';
import PageC from './component/PageC';

import './css/lib/reset.css';
import './css/lib/common.css';
import './css/lib/pageheader.css';
import './App.css';


const PageCComponent = Loadable({
	loader: () => import('./component/PageC'),
	loading: PageC,
});

const HomeComponent = () => {
	return (
		<div>
			<div className="wrap">
				<div className='login-title'>
					<h3>品牌私域流量立体营销解决方案</h3>
					<h4>让品牌生意不再难</h4>
				</div>
				{/* <div className="list-row box box-pack-center">
				<NavLink to="/page-d">home</NavLink>
			</div> */}

			</div>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/' exact component={HomeComponent}></Route>
					<Route path='/page-d' component={PageCComponent}></Route>
					<Redirect to={{
						pathname: '/',
						search: '?utm=your+face'
					}} />
				</Switch>

			</div>
		);
	}
}

export default withRouter(App);
