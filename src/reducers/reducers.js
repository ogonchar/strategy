import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { tradeProcessor } from "../utils/tradeProcessor";


const header = (state = [], action) => {
    switch(action.type) {
        case 'TOGGLE_LOGIN':
        return {
            ...state,
                show: {
                    login: !state.show.login
            }
        }
        default:
        return state
    }
}

const login = (state = [], action) => {    
    switch (action.type) {
        case 'LOGIN_REQUEST':
        
        return {
            requesting: true,
            successful: false,
            messages: [{ body: 'Signing up...', time: new Date() }],
            errors: [],
        }
    
        // reset the state and add a body message of success!
        // remember our successful returned payload will be:
        // {"email": "of the new user", "id": "of the user"}
        case 'LOGIN_SUCCESS':
        return {
            errors: [],
            messages: [{
            body: `Successfully created account for ${action.response.email}`,
            time: new Date(),
            }],
            requesting: false,
            successful: true,
        }
    
        // reset the state but with errors!
        // the error payload returned is actually far
        // more detailed, but we'll just stick with
        // the base message for now
        case 'LOGIN_ERROR':
        return {
            errors: state.errors.concat([{
            body: action.error.toString(),
            time: new Date(),
            }]),
            messages: [],
            requesting: false,
            successful: false,
        }
    
        default:
        return state
    }
      
}

const data = (state = [], action) => {

    switch (action.type) {
        case 'DATA_FETCH_SUCCEEDED':
        return {
            ...state,
            data: action.data,
            dataError: undefined
        }
        case 'DATA_FETCH_FAILED':
        return {
            ...state,
            dataError: action.message.stack
        }
        default:
        return state
    }
}

const results = (state = [], action) => {

    switch (action.type) {
        case 'SET_RESULTS':
        return {
            ...state,
            results: tradeProcessor(action.results.data.data, 
                action.results.data.strategy) 
        }
        case 'TOGGLE_DEALS': 
        return {
            ...state,
            showDeals: !state.showDeals
        }
        default: 
        return state
    }
}
export {results}
export default combineReducers({
    data,
    login,
    results,
    header,
    form: formReducer
})