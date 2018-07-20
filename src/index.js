import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState } from "./constants";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer,
  initialState, composeWithDevTools(
    applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

export default store