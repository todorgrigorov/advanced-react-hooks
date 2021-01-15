// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React from 'react'

function countReducer(state, action) {
  console.dir(action)
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.step }
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
