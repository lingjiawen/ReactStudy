import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Count from './components/Counter.js'
import counter from './reducers'

const store = createStore(counter)

class Counter extends React.Component {
	render() {
		return (
			<Count
				value={store.getState()}
				onIncrement={() => store.dispatch({ type: 'Increment' })}
				onDecrement={() => store.dispatch({ type: 'Decrement' })}
			/>
			)
	}
}


const rd = () => render(
  <Counter />,
  document.getElementById('CounterClass')
)

store.subscribe(rd);


export default Counter;