import React from 'react';
import { reduxForm } from 'redux-form'

import { Select, Input, Button } from '../parts/FieldParts'
import { BREESE, APPLY } from "../../constants";
import { initialState } from '../../constants'


const StrategyBuilder = ({val, onClickChange}) => {
    return (
        <div style={div}>
            <Select
                name='indicator'
                values={['rsi', 'ema']}
            />
            {val.indicator === 'rsi' ?
                (<div>
                    <Select
                        name='condition'
                        values={['>', '<']}
                    />
                    <Input
                        value={val.valueCondition}
                        name='valueCondition'
                    />
                    <Input
                        value={val.rsiStep}
                        name='rsiStep'
                    />
                </div>)
                :
                null
            }
            {val.indicator === 'ema' ?
                (<div>
                    <Select
                        name='directions'
                        values={['buy', 'sell', 'both']}
                        style={{ width: '100%' }}
                    />
                    <Input
                        value={val.rsiStep}
                        name='emaStep'
                    />
                </div>)
                :
                null
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
                onClick = {onClickChange}
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

let strategyForm = reduxForm({
    form: 'strategy',
    initialValues: initialState.form.strategy.val
})(StrategyBuilder)

export default strategyForm;