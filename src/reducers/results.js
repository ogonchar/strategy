
const results = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
        return {
            ...state,
            results:  
                action.results
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

export default results