import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from '../common/reducer'
import App from '../common/app'
import { renderToString } from 'react-dom/server'
import qs from 'qs'
import fs from 'fs'

const app = Express()
const port = 3000

//Serve static files
app.use(Express.static(path.join(__dirname,'../client')))

// This is fired every time the server side receives a request
app.use(handleRender)

// We are going to fill these out in the sections to follow
function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          
          <script src="index.c5e1556b2b1f746a97e2.js"></script>
        </body>
      </html>
      `
  }

function handleRender(req, res) {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query)
    const num = parseInt(params.counter, 10) || 0
  
    // Compile an initial state
    let preloadedState = num
  
    // Create a new Redux store instance
    const store = createStore(counterReducer, preloadedState)
  
    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
  
    // Grab the initial state from our Redux store
    const finalState = store.getState()
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState))
}

app.listen(port)