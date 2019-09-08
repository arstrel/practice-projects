import React from 'react'
import ReactDom from 'react-dom'

import routes from './routes'
import sampleData from './initialState'



const initialState = (localStorage["redux-store"]) 
                     ? JSON.parse(localStorage["redux-store"]) 
                     : sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

window.React = React

ReactDom.render(
	routes,
  document.getElementById('react-container')
)
