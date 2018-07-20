import { connect } from 'react-redux'

import StrategyMaster from '../components/strategy/StrategyMaster'

import { setStrategy, setResults } from '../actions'



const mapStateToProps = state => ({
  results: state.results,
  data: state.data,
  form: state.form
})

const mapDispatchToProps = dispatch => ({
   setStrategy: strategie => {dispatch(setStrategy({strategie}))},
   setResult: result => {dispatch(setResults(result))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrategyMaster)
