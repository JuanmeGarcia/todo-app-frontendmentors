import { useState } from 'react'

function useToggler() {
	const [toggle, setToggler] = useState(false)

	const toggler = () => {
		setToggler(prevtoggle => !prevtoggle)
	}

	return [toggle, toggler]
}

export { useToggler }
