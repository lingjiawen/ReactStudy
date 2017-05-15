import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)



let ReduxTodo = () => (
	<Provider store={store}>
		<App store={store} />
	</Provider>
);


/*
class ReduxTodo extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App store={store}/>
			</Provider>
		)
	}
}
*/


export default ReduxTodo