import C from '../constants'
import appReducer from './reducers'
import {createStore, applyMiddleware} from 'redux'

//simple middleware example
const consoleMessages = (store) => (next) => (action) => {

       let result
        //add functionality before the action
        console.groupCollapsed(`dispatching action => ${action.type}`)
        console.log('ski days', store.getState().allSkiDays.length)

       result = next(action)
       //functionality after the action

       let {allSkiDays, goal, errors, resortNames} = store.getState()
       console.log(`
       
        ski days: ${allSkiDays.length}
        goals: ${goal}
        fetching: ${resortNames.fetching}
        errors: ${errors.length}

       `);

       console.groupEnd()

       return result
 }

export default (initialState={}) => {
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
}