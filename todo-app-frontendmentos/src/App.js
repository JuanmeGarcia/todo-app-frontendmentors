import React from 'react'
import './sass/main.scss'
import { useTodoContext } from './context/useTodoContext'
import Header from './components/Header'
import Body from './components/Body'

function App() {
	const saludo = useTodoContext()
	return (
		<>
			<Header />
			<Body />
		</>
	)
}

export default App
