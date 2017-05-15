import { connect } from 'react-redux'
import TodoList from '../components/TodoList'


const mapStateToprops = (state) => ( {
	todos : state.todos,
} )

const mapDispatchToprops = () => ({
})

const VisibleTodoList = connect(
	mapStateToprops,
	mapDispatchToprops
)(TodoList)

export default VisibleTodoList