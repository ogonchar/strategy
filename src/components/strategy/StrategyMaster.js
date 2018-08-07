import React, { Component } from 'react';
import {tradeProcessor} from '../../utils/tradeProcessor'
import  StrategyBuilder  from "./StrategyBuilder";
import propTypes from 'prop-types';

/* Class renders menu for choising strategy option */

class StrategyMaster extends Component {

    onClickChange() {
        this.props.setResult(tradeProcessor(
            this.props.data.data,
            this.props.form.strategy.values))
    }

    render() {
        return (
            <StrategyBuilder
                onClickChange={(e) => this.props.applyStrategy(e)}
                strategy = {this.props.strategy}
            />
        )
    }
}


StrategyMaster.propTypes = {
    qty: propTypes.number,
    form: propTypes.shape({
        strategy: propTypes.shape({
            values: propTypes.shape({
                qty: propTypes.number,
                indicator: propTypes.oneOf(['rsi', 'ema']),
                condition: propTypes.oneOf(['>', '<', '=']),
                valueCondition: propTypes.number,
                risk: propTypes.number,
                stopLoss: propTypes.number,
                passAfterLoss: propTypes.number,
                exitCause: propTypes.oneOf(['%', '$']),
                exitAmount: propTypes.number,
                rsiStep: propTypes.number,
            })
        })
    })
}


export default StrategyMaster
