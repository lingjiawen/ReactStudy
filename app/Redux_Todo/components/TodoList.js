import React from 'react'
import { deleteNode } from '../actions'


const Todo = ( props ) => (
	<li data-key={props.id}> {props.text}
	<button className="destroy" onClick={ e => {
		e.preventDefault()
		var todoNode =  e.target.parentNode.getAttribute('data-key');
		props.store.dispatch(deleteNode(todoNode))
		console.log(props.store.getState())
		console.log(props)
	}}>delete</button></li>
)


const TodoList = ( props ) => (
	<ul className="reduxtodolist">
		{ props.todos.map((todo) => 
			<Todo key={todo.id} store={props.store} {...todo} />
		)}
	</ul>
)

export default TodoList