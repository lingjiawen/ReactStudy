import React from 'react'
import { render } from 'react-dom'

class ListTodo extends React.Component {
	constructor(props) {
		super(props);

		this.handleDel = this.handleDel.bind(this);
	}

	handleDel(e) {
		var delIndex = e.target.getAttribute('data-key');
		this.props.todo.splice(delIndex,1);
		this.props.onDel(this.props.todo);
	}


	render() {
		return (
			<ul id="todo-list">
				{
					this.props.todo.map(function(value, index, array) {
						return (
							<li>
								<label>{value}</label>
								<button className="destroy" onClick={this.handleDel} data-key={index}>delete</button>
							</li>
							);
					}.bind(this))
				}
			</ul>
			);
	}
}
export default ListTodo;