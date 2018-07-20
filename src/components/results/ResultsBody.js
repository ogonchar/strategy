import React from 'react'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'

import { BORDER } from "../../constants";
import { GREY, PURPLE, ORANGE } from "../../constants";
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
                    style = {deals? dealsToggle : {}}
                >Deals <FontAwesome name={deals?'arrow-down' : ''}/></div>
                <div style = {dealsStyle}>
                    {showDeals && deals?
                        deals.map((d , i) => {
                            return( 
                                <div key={i} style={dealsStyle}>{d}</div>
                            ) 
                        }) 
                        :
                        null
                    }
                </div>
                <p>Deals: {deals? deals.length : null}</p>
                <p>Loss: {loss}</p>
                <p>Profit: {profit}</p>
                <p>Result: {result}</p>
            </div>
    );
};

const div = {
    ...BORDER,
    backgroundColor: PURPLE,
    padding: 10,
    color: 'white',
    display: 'inline-flex',
    flexDirection: 'column',
    width: '100%',
} 
const dealsToggle = {
    backgroundColor: ORANGE, 
    cursor: 'pointer',
}
const dealsStyle = {
    margin: '5px',
    borderBottom: '1px solid ' + GREY,

}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);