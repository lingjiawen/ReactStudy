import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'


class TypeNew extends React.Component {
	constructor(props) {
		super(props);

		this.handleAdd = this.handleAdd.bind(this);
	} 

	handleAdd(e) {
	{/*Another difference is that you cannot return false to prevent default behavior in React. 
	You must call preventDefault explicitly. For example, with plain HTML, to prevent the default
	 link behavior of opening a new page
	*/}
		e.preventDefault();
	{/*于获取用户的输入。这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。
		为了做到这一点，文本输入框必须有一个 ref 属性，
		然后 this.refs.[refName] 就会返回这个真实的 DOM 节点。*/}
		//var inputDom = this.refs.inputnew.getDOMNode();
		var inputDom = ReactDOM.findDOMNode(this.refs.inputnew);
		var newthing = inputDom.value.trim();
		var rows = this.props.todo;
		if(newthing !=='') {
			rows.push(newthing);
			this.props.onAdd(rows);
		}
		inputDom.value = '';
	}

	render() {
		return (
			// form submit 时，触发 handleAdd 事件
			<form onSubmit={this.handleAdd}>
				<h1>这是一个用react做的todoList</h1>
				<input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off" />
				<button type="submit">AddTodo</button>
			</form>
			);
	}
}

export default TypeNew;