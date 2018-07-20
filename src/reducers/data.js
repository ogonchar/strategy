const data = (state = [], action) => {

    switch (action.type) {
        case 'DATA_FETCH_SUCCEEDED':
        return {
            ...state,
            data: action.data
        }
        case 'DATA_FETCH_FAILED':
        return {
            ...state,
            dataError: action.dataError
        }
        default:
        return state
    }
}

const query = (state = [], action) => {
    switch (action.type) {
    case 'DATA_FETCH_REQUESTED':
    return {
        ...state,
        query: action.query
    }
    default:
        return state
}
}

export {data, query}