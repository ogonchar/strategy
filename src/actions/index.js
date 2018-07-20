
// STRATEGY
        export const setStrategy = strategy => ({
            type: 'SET_STRATEGY',
            strategy
        })

//RESULTS
        export const setResults = results => ({
            type: 'SET_RESULTS',
            results
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


