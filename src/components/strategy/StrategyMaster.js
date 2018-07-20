import React, { Component } from 'react';
import {tradeProcessor} from '../../utils/tradeProcessor'
import  StrategyBuilder  from "./StrategyBuilder";

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
                onClickChange={(e) => this.onClickChange(e)}
                val = {this.props.form.strategy.values}
            />
        )
    }
}


export default StrategyMaster
