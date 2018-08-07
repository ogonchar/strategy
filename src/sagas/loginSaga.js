import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects'
import {  setUser,  unsetUser } from '../actions/actions'
import { BrowserRouter  } from 'react-router-dom'

// So that we can modify our Client piece of state

const loginUrl = 'http://localhost:5000/auth'

function loginApi (userName, password) {
  console.log(userName, password);
  
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName, password }),
  })
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { console.log(error) })
}

function* logout () {
  // dispatches the CLIENT_UNSET action
  yield put(unsetUser())

  // remove our token
  localStorage.removeItem('token')

  // redirect to the /login screen
  BrowserRouter.push('/login')
}

function* loginFlow (userName, password) {
  let token
  try {
    // try to call to our loginApi() function.  Redux Saga
    // will pause here until we either are successful or
    // receive an error
    token = yield call(loginApi, userName, password)

    // inform Redux to set our client token, this is non blocking so...
    yield put(setUser(token))

    // .. also inform redux that our login was successful
    yield put({ type: 'LOGIN_SUCCESS' })

    // set a stringified version of our token to localstorage on our domain
    localStorage.setItem('token', JSON.stringify(token))

    // redirect them to WIDGETS!
    BrowserRouter.push('/widgets')
  } catch (error) {
    // error? send it to redux
    yield put({ type: 'LOGIN_ERROR', error })
  } finally {
    // No matter what, if our `forked` `task` was cancelled
    // we will then just redirect them to login
    if (yield cancelled()) {
      BrowserRouter.push('/login')
    }
  }

  // return the token for health and wealth
  return token
}

function* loginWatcher () {
  //Endless cicle watching for event
  while (true) {
    // wotching for login requests fires
    const { input:{password, userName} } = yield take('LOGIN_REQUEST')
    // fork api call separate process to be able to stop it in 
    //the middle if user wish
    const task = yield fork(loginFlow, userName, password)
    // watching for either user click logout or login request failed
    const action = yield take(['CLIENT_UNSET', 'LOGIN_ERROR'])
    // if user click logout cancel forked login call 
    if (action.type === 'CLIENT_UNSET') yield cancel(task)    
    yield call(logout)
  }
}

export default loginWatcher
