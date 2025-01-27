import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable';
import Login from './component/Login';

import './css/lib/reset.css';
import './css/lib/common.css';
import './css/lib/pageheader.css';
import './App.css';


const LoginComponent = Loadable({
	loader: () => import('./component/Login'),
	loading: Login,
});

const HomeComponent = () => {
	return (
		<div>
			<LoginComponent/>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/' exact component={HomeComponent}></Route>
					<Route path='/test/bbb/index.html' component={LoginComponent}></Route>
					<Redirect to={{
						pathname: '/test/bbb/index.html',
					}} />
				</Switch>

			</div>
		);
	}
}

export default withRouter(App);
