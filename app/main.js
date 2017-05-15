import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory, IndexRoute} from 'react-router';

import Home from './Nav/Home'
import Study from './Nav/Study'
import NavList from './Nav/NavList.js'

import TodoList from './ReactTodoList/components/TodoList.js'

import Counter from './Counter/index.js'
import ReduxTodo from './Redux_Todo/index.js'

render((
	<Router history={hashHistory}>
		<Route path="/" component={NavList}>
			<IndexRoute component={Home} />
			<Route path="/Study" component={Study} />
			<Route path="/React_TodoList" component={TodoList} />
			<Route path="/Counter" component={Counter} />
			<Route path="/Redux_Todo" component={ReduxTodo} /> 
		</Route>
	</Router>
	),document.getElementById('content')
);
