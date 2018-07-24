import { tradeProcessor } from "./tradeProcessor"
import { mockData, initialState } from "../constants";

describe('trading', () => {
    it('should trade', () => {
        const results = tradeProcessor(mockData, initialState.form.strategy.values)
        expect(results.deals).anything
    })
})