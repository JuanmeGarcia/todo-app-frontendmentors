import React from 'react'

function TodosCounter({todos, setTodos}) {

    const removeAllCompletedTodos = () => {
        setTodos(()=>(
            todos.filter(todo => !todo.state)
        ))
    }

	return (

        todos.length <= 0 
        ?(
            <div className="todo-counter todo-counter--empty">
                <h1>Create your first todo</h1>
            </div>
        ):
		(<div className="todo-counter">
			<p className="todo-counter__text">
                {todos.length} items left
			</p>
            <p 
                className="todo-counter__text todo-counter__text--remove"
                onClick={removeAllCompletedTodos}
            >
                Clear completed
            </p>
		</div>
        )
    
    

	)
}

export default TodosCounter
