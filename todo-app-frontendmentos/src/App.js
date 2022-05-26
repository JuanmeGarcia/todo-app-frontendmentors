import React from 'react'
import './sass/main.scss'
import Header from './components/Header'
import Body from './components/Body'
import TodoContainer from './components/TodoContainer'
import Todo from './components/Todo'
import { useToggler } from './hooks/useToggler'

const todosExamples = [
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

function App() {
	const [todos, setTodos] = React.useState(
		() => JSON.parse(localStorage.getItem('todos')) || []
	)


	React.useEffect(() => {
		console.log(`nashe`)
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])


	const [value, setValue] = React.useState('')
	const [isCompleted, toggleIsCompleted] = useToggler()

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

	const createNewTodo = (event, todo, isCompleted) => {
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

	const iterateTodos = todos.map(todo => (
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
				<TodoContainer>{iterateTodos}</TodoContainer>
			</Body>
		</>
	)
}

export default App
