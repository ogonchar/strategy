import {results} from "./reducers";

describe('results', ()=> {
    it('should match', () => {
        const res  = {
            results: {
                result: 1885.75,
                deals: [
                  'On 20 buy with price : 186.46499999999997',
                  'On 20 close with loss : 37.29',
                  'On 25 buy with price : 191.66',
                  'On 25 close with loss : 75.62',
                  'On 31 buy with price : 193.15',
                  'On 31 close with loss : 114.25'
                ],
                loss: '114.25',
                profit: '0'
              }
        }
        const expectedState = {
            results: {
                result: 1885.75,
                deals: [
                  'On 20 buy with price : 186.46499999999997',
                  'On 20 close with loss : 37.29',
                  'On 25 buy with price : 191.66',
                  'On 25 close with loss : 75.62',
                  'On 31 buy with price : 193.15',
                  'On 31 close with loss : 114.25'
                ],
                loss: '114.25',
                profit: '0'
              }
        }
        expect(results({}, res).result).toEqual(expectedState.result)
    })
})