import React from 'react'
import { useSelector } from 'react-redux'


export default function counter() {

  const count = useSelector(state => state.count)

	// const [ count, setCount ] = React.useState(0)

	// const increment = () => setCount(1 + count)
	// const decrement = () => setCount(count - 1)

	return (
  <div>
    <div>Hello</div>
		<div>World!</div>
		<div>Count: {count}</div>
  </div>
  )
}