import React from 'react';
import { reduxForm } from 'redux-form'

import { Select, Input, Button } from '../parts/FieldParts'
import { BREESE, APPLY } from "../../constants";
import { initialState } from '../../constants'


const StrategyBuilder = ({strategy, applyStrategy}) => {
    return (
        <div style={div}>
            <Select
                name='indicator'
                values={['rsi', 'ema']}
            />
            {strategy.indicator === 'rsi' &&
                (<div>
                    <Select
                        name='condition'
                        values={['>', '<']}
                    />
                    <Input
                        value={strategy.valueCondition}
                        name='valueCondition'
                    />
                    <Input
                        value={strategy.rsiStep}
                        name='rsiStep'
                    />
                </div>)
            }
            {strategy.indicator === 'ema' &&
                (<div>
                    <Select
                        name='directions'
                        values={['buy', 'sell', 'both']}
                        style={{ width: '100%' }}
                    />
                    <Input
                        value={strategy.rsiStep}
                        name='emaStep'
                    />
                </div>)
            }
            <div style={header}>
                Risk parameters
            </div>
            <Input
                type='text'
                name='qty'
                placeholder='qty contracts'
            />
            <Input
                name='risk'
            />
            <Input
                name='stopLoss'
                placeholder='Stop loss amount in $'
            />
            <Input
                placeholder='Pass intervals after loss'
                name='passAfterLoss'
            />
            <div style={header}>
                Take profit parameters
            </div>
            <Input
                name='exitCause'
                placeholder='% or $'
            />
            <Input
                name='exitAmount'
                placeholder='% of profit  to take'
            />
            <Button
                type = 'submit'
                name='apply'
                onClick = {applyStrategy}
                style = {{backgroundColor: APPLY}}
            />
        </div>
    );
};

const div = {
    width: 194,
    maxWidth: 210,
    display: 'inline-flex',
    flexDirection: 'column',
    marginTop: '40px',
    float: 'right',
}

const header = {
    verticalAlign: 'middle',
    lineHeight: '40px',
    textAlign: 'center',
    height: '40px',
    backgroundColor: BREESE,
}

export { StrategyBuilder }

let strategyForm = reduxForm({
    form: 'strategy',
    initialValues: initialState.form.strategy.val
})(StrategyBuilder)

export default strategyForm;