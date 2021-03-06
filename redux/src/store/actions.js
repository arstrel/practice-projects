import C from './constants'
import fetch from 'isomorphic-fetch'

export function addDay(resort, date, powder=false, backcountry=false) {
    return {
        type: C.ADD_DAY,
        payload: {
            "resort": resort,
            "date": date,
            "powder": powder,
            "backcountry": backcountry
        }
    }
}

export const removeDay = (date) => {
    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal) => ({
    type: C.SET_GOAL,
    payload: goal
})

export const addError = (error) => ({
    type: C.ADD_ERROR,
    payload: error
})

export const clearError = (errorNumber) => ({
    type: C.CLEAR_ERROR,
    payload: errorNumber
})
export const changeSuggestions = (suggestions=[]) => ({
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
})
export const clearSuggestions = () => ({
    type: C.CLEAR_SUGGESTIONS,
})

export const randomGoals = () => (dispatch, getState) => {
    if(!getState().resortNames.fetching) {
        dispatch({
            type: C.FETCH_RESORT_NAMES
        })
        setTimeout(()=> {
            dispatch({
                type: C.CANCEL_FETCHING
            })
        }, 1500)
    }
}

export const suggestResortNames = value => dispatch => {

	dispatch({
		type: C.FETCH_RESORT_NAMES
	})

	fetch('http://localhost:3333/resorts/' + value)
		.then(response => response.json())
		.then(suggestions => {

			dispatch({
				type: C.CHANGE_SUGGESTIONS,
				payload: suggestions
			})

		})
		.catch(error => {

			dispatch(
				addError(error.message)
			)

			dispatch({
				type: C.CANCEL_FETCHING
			})

		})

}