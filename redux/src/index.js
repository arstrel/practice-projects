import C from './constants'
import {fetching , suggestions} from './store/reducers'


const action = {
   type: C.CHANGE_SUGGESTIONS,
   payload: ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const state = {
  fetching: true,
  suggestions: []
}

const expectedState = {
  fetching: false,
  suggestions: ['Heavenly Ski Resort', 'Heavens Sonohara']
}

const actualState = {
  fetching: fetching(state.fetching, action),
  suggestions: suggestions(state.suggestions, action)
}

// expect(actualState.suggestions).toEqual(expectedState.suggestions)
// expect(actualState.fetching).toEqual(expectedState.fetching)

console.log(`
   initial state: ${JSON.stringify(state)}
   action: ${JSON.stringify(action)}
   new state: ${JSON.stringify(actualState)}

`)