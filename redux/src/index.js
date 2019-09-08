import C from './constants'
import storeFactory from './store'

const initialState = localStorage['redux-store'] 
                     ? JSON.parse(localStorage['redux-store'])
                     : {}

const saveState = () => {
   const state = JSON.stringify(store.getState())
   localStorage['redux-store'] = state
}

const store = storeFactory(initialState)

store.subscribe(saveState)

store.dispatch({
   type: C.ADD_DAY,
   payload: {
      "resort": "Mt Newby",
      "date": "2018-11-11",
      "powder": true,
      "backcountry": false
   }
})

store.dispatch({
   type: C.ADD_DAY,
   payload: {
      "resort": "Mt Freshly",
      "date": "2018-11-12",
      "powder": false,
      "backcountry": true
   }
})

store.dispatch({
   type: C.ADD_DAY,
   payload: {
      "resort": "Squaw Valley",
      "date": "2018-11-13",
      "powder": false,
      "backcountry": false
   }
})



