
// STRATEGY
        export const setStrategy = strategy => ({
            type: 'SET_STRATEGY',
            strategy
        })

//RESULTS
        export const setResults = (data, strategy) => ({
            type: 'SET_RESULTS',
            results: {data,
            strategy}
        })
        export const toggleDeals = () => ({
            type: 'TOGGLE_DEALS'
        })

//DATA
        export const setData = data => ({
            type: 'SET_DATA',
            data
        })

        export const getDataQuery = query => ({
            type: 'DATA_FETCH_REQUESTED',
            query
        })

        export const dataGetError = error => ({
            type: 'DATA_FETCH_FAILED',
            error
        })

        export const dataFetchSucceeded = succeess => ({
            type: 'DATA_FETCH_SUCCEEDED',
            succeess
        })

// LOGIN/LOGOUT

        export const setUser = (token) => ({
            type: 'SET_CLIENT',
            token,
        })
        
        export const unsetUser = () => ({
            type: 'UNSET_CLIENT',
        })

        export const toggleLogin = () => ({
            type: 'TOGGLE_LOGIN'
        })

        export const loginRequest = (input) => ({
            type: 'LOGIN_REQUEST',
            input
        })

        export const loginSuccess = () => ({
            type: 'LOGIN_SUCCESS'
        })
        
        export const loginError = () => ({
            type: 'LOGIN_ERROR'
        })

        export const signupRequest = (input) => ({
            type: 'SIGNUP_REQUEST',
            input
        })

        export const signupSuccess = () => ({
            type: 'SIGNUP_SUCCESS'
        })
        
        export const signupError = () => ({
            type: 'SIGNUP_ERROR'
        })