import {setResults} from './index'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const results = 'Finish docs'
    const expectedAction = {
      type: 'SET_RESULTS',
      results
    }
    expect(setResults(results)).toEqual(expectedAction)
  })
})