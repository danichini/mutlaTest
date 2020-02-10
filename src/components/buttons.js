import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function buttons() {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
	// const [ count, setCount ] = React.useState(0)

	const increment = () => {
    dispatch({
      type: 'INCREMENT_COUNT',
    })
  }

	const decrement = () => {
    dispatch({
      type: 'DECREMENT_COUNT',
    })
  }

	return (
		<div>
			<button type="button" className="btn btn-primary mr-1" onClick={increment}>+</button>
      <button
        type="button"
        disabled={count <= 0 ? true : false}
        className="btn btn-danger" onClick={decrement}
      >-</button>
		</div>
  )
}