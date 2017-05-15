import React from 'react'
import { render } from 'react-dom'

import TypeNew from './TypeNew.js'
import ListTodo from './ListTodo.js'

var todoArray = [];

class TodoList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {todoList:todoArray};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(rows) {
		this.setState(rows);
	}

	render() {
		return ( 
			<div>
				<TypeNew onAdd={this.handleChange} todo={this.state.todoList}/>
				<ListTodo onDel={this.handleChange} todo={this.state.todoList}/>

			</div>
			);
	}
}

export default TodoList;