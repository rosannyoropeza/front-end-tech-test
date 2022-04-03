import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import cartReducers from './reducers/cartReducers'

const store = createStore(cartReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)