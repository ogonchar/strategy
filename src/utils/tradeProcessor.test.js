
import { dealResult } from "./dealResult";
import { mockData } from "../constants";


describe('deal', () => {
    it( 'should trade if', () => {
        const results =  dealResult(mockData, 
            {price: mockData[3].low,
            qty: 10,
            direction: 'buy'}, 1, 0, 2, [], '%', 1 , false, false, 0, 0)
        
        expect(results.deals.length).toBeGreaterThan(0)
    })
})