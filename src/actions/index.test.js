import {setResults} from './index'

describe('actions', () => {
  it('Actions should match', () => {
    const results = 'Finish docs'
    const expectedAction = {
      type: 'SET_RESULTS',
      results
    }
    expect(setResults(results)).toEqual(expectedAction)
  })
})