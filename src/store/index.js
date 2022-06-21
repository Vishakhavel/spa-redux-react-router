import { createStore } from 'redux'

let initalState = { counter: 0 }

const reducerFunction = (state = initalState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    }
  }

  if (action.type === 'DOUBLE') {
    return {
      counter: state.counter * 2,
    }
  }

  if (action.type === 'HALF') {
    return {
      counter: state.counter / 2,
    }
  }

  return state
}

const store = createStore(reducerFunction)

export default store
