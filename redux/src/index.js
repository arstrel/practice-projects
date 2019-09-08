import storeFactory from './store'
import initialState from './initialState.json'
import {
   addDay, 
   removeDay, 
   setGoal,
   addError,
   clearError,
   changeSuggestions,
   clearSuggestions,
   randomGoals

} from './store/actions'

const store = storeFactory(initialState)

store.dispatch(
   addDay("Havenly", "2018-12-22")
)

store.dispatch(
   removeDay("2018-12-8")
)

store.dispatch(
   setGoal(9)
)
store.dispatch(
   addError("Something went wrong")
)
store.dispatch(
   clearError(0)
)
store.dispatch(
   changeSuggestions(['One', 'two', 'another'])
)
store.dispatch(
   clearSuggestions()
)
store.dispatch(
   randomGoals()
)