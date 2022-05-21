import React, { useState } from 'react'

function useIsHover(){
    const [isHover, setIsHover] = useState(false)

    const toggleHover = () => {
        setIsHover(prevIsHover => !prevIsHover)
    }

    return [isHover, toggleHover]
}

export { useIsHover }