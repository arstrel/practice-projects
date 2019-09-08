import React from 'react'
import ReactDom from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import { Provider } from 'react-redux'
import storeFactory from './store'
import {addError} from './store/actions'

const initialState = (localStorage["redux-store"]) 
                     ? JSON.parse(localStorage["redux-store"]) 
                     : sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

    
const store = storeFactory(initialState)
store.subscribe(saveState)

const handleError = error => {
  store.dispatch(
    addError(error.message)
  )
}

ReactDom.render(
	<Provider store={store}>
  {routes}
</Provider>,
  document.getElementById('react-container')
)
