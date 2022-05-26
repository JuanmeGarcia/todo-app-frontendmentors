import React from 'react'

function TodoInput({value, handleChange, isCompleted, toggleIsCompleted, createNewTodo}) {


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
				onKeyPress={(e) => createNewTodo(e, value)}
			/>
		</div>
	)
}

export default TodoInput
