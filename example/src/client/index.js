import React from 'react'
import { hydrate } from 'react-dom'
import App from '../common/app'
import counterReducer from '../common/reducer'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(counterReducer, preloadedState)

hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )