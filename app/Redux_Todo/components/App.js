import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
const App = (props) => (
	<div>
		<h1>这是一个用React-redux写的TodoList</h1>
		<AddTodo />
		<VisibleTodoList store={props.store}/>
	</div>
)

export default App