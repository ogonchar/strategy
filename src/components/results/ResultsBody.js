import React from 'react';
import { connect } from 'react-redux'

import { BORDER } from "../../constants";
import { GREY } from "../../constants";
import {toggleDeals} from '../../actions'

const mapStateToProps = (state) => ({
    ...state.results.results,
    ...state.results
  });
const mapDispatchToProps = dispatch => ({
    toggleDeals: () => {dispatch(toggleDeals())},
})

const ResultsBody = ({toggleDeals, loss, profit, deals, result, showDeals}) => {
    return (
        <div style = {div}>
                <h3>Results</h3>
                <div 
                    onClick = {toggleDeals}
                    style = {dealsStyle}
                >Deals</div>
                {showDeals && deals?
                    deals.map((d , i) => {
                        return( 
                            <div key={i}>{d}</div>
                        ) 
                    })
                    :
                    null
                }
                <p>Loss: {loss}</p>
                <p>Profit: {profit}</p>
                <p>Result: {result}</p>
            </div>
    );
};

const div = {
    ...BORDER,
    backgroundColor: GREY,
    padding: 10,
    color: 'white',
    display: 'inline-flex',
    flexDirection: 'column',
    width: '100%',
}
const dealsStyle = {
    backgroundColor: GREY,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);