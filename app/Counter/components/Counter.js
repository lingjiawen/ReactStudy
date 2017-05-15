import React from 'react'

class Count extends React.Component {

	constructor(props) {
		super(props);

		this.incrementIfOdd = this.incrementIfOdd.bind(this);
		this.incrementAsync = this.incrementAsync.bind(this);
	}

	incrementIfOdd() {
		if(this.props.value % 2 !== 0) {
			this.props.onIncrement();
		}
	}

	incrementAsync() {
		setTimeout(this.props.onIncrement, 1000);
	}

	render() {
		const {value, onIncrement, onDecrement} = this.props;
		return (
			<div id="CounterClass">
				<h1>Counter</h1>
				Clicked: {value} times
				<p className="counterBtn">
				<button onClick={onIncrement}> + </button>
				<button onClick={onDecrement}> - </button>
				<button onClick={this.incrementIfOdd}> 自增（如果是奇数）</button>
				<button onClick={this.incrementAsync}> 异步自增 </button>
				</p>
			</div>
			)
	}
}

export default Count;