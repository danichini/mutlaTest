
import React from 'react'
import Buttons from './components/buttons'
import Counter from './components/countdown'
import reducer from './reducers/countreducer'

import { createStore} from 'redux'
import { Provider } from 'react-redux'

const INITIAL_COUNT = {
  count: 0
}

const store = createStore(reducer, INITIAL_COUNT)

export default function App() {
	return (
  <Provider store={store}>
		<Counter/>
		<Buttons/>
  </Provider>
  )
}
