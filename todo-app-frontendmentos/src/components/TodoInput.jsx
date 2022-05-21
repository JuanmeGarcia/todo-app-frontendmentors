import React from 'react'
import { useToggler } from '../hooks/useToggler'

function TodoInput() {
	const [value, setValue] = React.useState('')
    const [isCompleted, toggleIsCompleted] = useToggler()
    const handleChange = (e) => {
        const {value} = e.target
        setValue(value)
    }

    React.useEffect(()=>{
        console.log(isCompleted)
    }, [isCompleted])


	return (
		<div className="todo-input">
            <div 
                className={`todo-input__checkbox ${isCompleted && 'todo-input__checkbox--completed'}`}
                onClick={toggleIsCompleted}
            ></div>
			<input
				className="todo-input__text"
				name="todoText"
				type="text"
				placeholder="Add todo"
				value={value}
				onChange={handleChange}
			/>
		</div>
	)
}

export default TodoInput
