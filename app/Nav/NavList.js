import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

class NavList extends React.Component {
	constructor(props) {
		super(props);

	}


	render() {
		return ( 
			<div>
			<ul className="nav">
				<li className="navEle"><a className="HelloReact"><Link to="/">HelloReact</Link></a></li>
				<li className="navEle"><a ><Link to="/Study">Study</Link></a></li>
				<li className="navEle" id="Demo">
					<a  className="DemoBtn"><Link to="">Demo</Link></a>
					<div className="Demo-content">
						<a><Link to="/React_TodoList">React_TodoList</Link></a>
						<a><Link to="/Counter">Counter</Link></a>
						<a><Link to="/Redux_Todo">Redux_Todo</Link></a>
					</div>
				</li>
			</ul>
			{this.props.children}
			</div>
			);
	}
}

export default NavList;