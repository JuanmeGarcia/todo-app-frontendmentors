import React, { useContext } from 'react'

const TodoContext = React.createContext()

export function TodoContextProvider({ children }) {
    return(
        <TodoContext.Provider value={'hola'}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext)