import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {data, query} from './data'
import results from './results'


export default combineReducers({
    data,
    results,
    query,
    form: formReducer
})