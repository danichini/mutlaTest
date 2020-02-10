'use strict'

import React from 'react'

export default function App() {
	const [ count, setCount ] = React.useState(0)

	const increment = () => setCount(1 + count)
	const decrement = () => setCount(count - 1)

	return <>
		<div>Hello</div>
		<div>World!</div>
		<div>Count: {count}</div>

		<div>
			<button type="button" className="btn btn-primary mr-1" onClick={increment}>+</button>
      <button
        type="button"
        disabled={count <= 0 ? true : false}
        className="btn btn-danger" onClick={decrement}
      >-</button>
		</div>
	</>
}
