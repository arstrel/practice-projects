import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'

let state = initialState

console.log(`
   Initial state
   ===================
   goal: ${state.goal}
   resorts: ${JSON.stringify(state.allSkiDays)}
   fetching: ${state.resortNames.fetching}
   suggestions: ${state.resortNames.suggestions}
   errors: ${state.errors}
`);

state = appReducer(state, {
   type: C.SET_GOAL,
   payload: 4
})

state = appReducer(state, {
   type: C.ADD_DAY,
   payload: {
      "resort": "Mt Schasta",
      "date": "2018-10-28",
      "powder": false,
      "backcountry": true
   }
})

state = appReducer(state, {
   type: C.CHANGE_SUGGESTIONS,
   payload: ["Mt Tallac", "Mt Hood", "Mt Jokester"]
})



console.log(`
   Next state
   ===================
   goal: ${state.goal}
   resorts: ${JSON.stringify(state.allSkiDays)}
   fetching: ${state.resortNames.fetching}
   suggestions: ${state.resortNames.suggestions}
`);