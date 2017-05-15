import { combineReducers } from 'redux'

const todo = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO' :
			return {
				id: action.id,
				text: action.text
			}
		case 'DELETE_NODE':
			return 
				state.filter( (item) => {
					if(item.id == action.DeletedNode)
					{
						return false
					}
					else
						return true;
				})
		default:
			return state;
	}
}

const todos = (state=[], action) => {
	switch(action.type) {
		case 'ADD_TODO' :
			return [...state, todo(undefined, action)]
		case 'DELETE_NODE' :
			return state.filter( (item) => {
					if(item.id == action.DeletedNode)
						return false
					else
						return true;
				})
		default:
			return state
	}
}

const todoApp = combineReducers( {
	todos
})

export default todoApp