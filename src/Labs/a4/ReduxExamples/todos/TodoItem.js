/** @format */
import React from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, setTodo } from "./todosReducer"

function TodoItem({ todo }) {
	const dispatch = useDispatch()
	return (
		<ul className="list-group">
		<li key={todo.id} className='list-group-item'>
			<button className="btn btn-danger float-end me-1" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
			<button className="btn btn-success float-end me-1" onClick={() => dispatch(setTodo(todo))}> Edit </button>
			{todo.title}
		</li>
		</ul>
	)
}
export default TodoItem
