import React from 'react'
import './sass/main.scss'
import Header from './components/Header'
import Body from './components/Body'
import TodoContainer from './components/TodoContainer'
import Todo from './components/Todo'
import { useToggler } from './hooks/useToggler'
import TodosCounter from './components/TodosCounter'
import FilterTodo from './components/FilterTodo'

/* const todosExamples = [
	{
		id: 1,
		body: 'Привет',
		state: false,
	},
	{
		id: 2,
		body: 'Привет',
		state: false,
	},
	{
		id: 3,
		body: 'Привет',
		state: false,
	},
]
 */
function App() {
	const [todos, setTodos] = React.useState(
		() => JSON.parse(localStorage.getItem('todos')) || []
	)
	const [value, setValue] = React.useState('')
	const [isCompleted, toggleIsCompleted] = useToggler()
	const [filter, setFilter] = React.useState('all')

	let filteredTodos = []

	if(filter === 'all'){
		filteredTodos = [...todos]
	}
	if(filter === 'active'){
		filteredTodos = todos.filter(todo => !todo.state)
	}
	if(filter === 'completed'){
		filteredTodos = todos.filter(todo => todo.state)
	}

	React.useEffect(() => {
		console.log(`nashe`)
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleChange = e => {
		const { value } = e.target
		setValue(value)
	}

	const setIsCheckedTodo = id => {
		setTodos(prevIsChecked => {
			return prevIsChecked.map(todo =>
				todo.id === id
					? 	{
							...todo,
							state: !todo.state,
					  	}
					: todo
			)
		})
	}

	const createNewTodo = (event, todo, isCompleted = false) => {
		if(!todo) return
		if (event.key === 'Enter') {
			const newTodo = {
				id: todos.length + 1,
				body: todo,
				state: isCompleted,
			}
			setTodos(prevTodos => [...prevTodos, newTodo])
			setValue('')
		}
	}

	const removeTodo = id => {
		console.log(`nahse`)
		setTodos(prevIsChecked => {
			return prevIsChecked.filter(todo => todo.id !== id)
		})
	}

	const iterateTodos = filteredTodos.map(todo => (
		<Todo
			key={todo.id}
			todo={todo}
			toggle={setIsCheckedTodo}
			removeTodo={removeTodo}
		/>
	))

	return (
		<>
			<Header 
				value={value}
				handleChange={handleChange}
				isCompleted={isCompleted}
				toggleIsCompleted={toggleIsCompleted}
				createNewTodo={createNewTodo}
			/>
			<Body>
				{todos.length > 0 && <TodoContainer>{iterateTodos}</TodoContainer>}
				<TodosCounter
					todos={todos}
					setTodos={setTodos}
				/>
				<FilterTodo 
					filter={filter}
					setFilter={setFilter}
				/>
			</Body>
		</>
	)
}

export default App
