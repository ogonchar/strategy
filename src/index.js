import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/reducers'
import createSagaMiddleware from 'redux-saga'
import superSaga from './sagas/superSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialState } from "./constants";



const sagaMiddleware = createSagaMiddleware()

// Initial state taken from constants!!
const store = createStore(rootReducer,
  initialState, composeWithDevTools(
    applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(superSaga)

ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>
  , document.getElementById('root'
));

export default store