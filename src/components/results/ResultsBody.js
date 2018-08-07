import React from 'react'
import FontAwesome from 'react-fontawesome'
import Transition from 'react-addons-css-transition-group'

import './resultsBody.css'
import { BORDER } from "../../constants";
import { GREY, PURPLE, ORANGE } from "../../constants";


const ResultsBody = ({toggleDeals, results, showDeals}) => {
    return (
        <Transition transitionName="slide1"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
        {results?
        
        <div className='results' key = {'results'}>
                <h3>Results</h3>
                <div 
                    onClick = {toggleDeals}
                    style = {results.deals? dealsToggle : {}}
                >Deals <FontAwesome name={results.deals?'arrow-down' : ''}/>
                </div>
                <Transition transitionName="slide1"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                {(showDeals && results.deals) &&<div key = {999}>
                    {(showDeals && results.deals) &&
                        results.deals.map((d , i) => {
                            return( 
                                <div key={i} className='dealsStyle'>{d}</div>
                            ) 
                        }) 
                    }
                </div>}
                </Transition>
                <p>Deals: {results.deals? results.deals.length : null}</p>
                <p>Loss: {results.loss}</p>
                <p>Profit: {results.profit}</p>
                <p>Result: {results.result}</p>
            </div>

        :
        null}
        </Transition>
    );
};

const dealsToggle = {
    backgroundColor: ORANGE, 
    cursor: 'pointer',
}

export default ResultsBody;