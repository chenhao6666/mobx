
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import asyncRouter from '../util/asyncRouter'

const todoList = asyncRouter(() => import('./todoList/TodoList'));
const nameSpace = asyncRouter(() => import('./nameSpace/NameSpace'));

class MOBXIndex extends React.Component {
	componentWillMount() {
		console.log('test');
	}

	render () {
		return  (
			<BrowserRouter>
				<Switch>
					<Route path= "/1" component={nameSpace} />
					<Route path= "/2" component={todoList} />
				</Switch>
			</BrowserRouter>
		)
	}
}
ReactDOM.render(
	<MOBXIndex />,
	document.getElementById("root")
)
// export default MOBXIndex;
