import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types';

import '../css/main.css'
import RSIChart from './charts/RSIChart'
import Header from './header/Header'
import StrategyBuilder from './strategy/StrategyBuilder'
import Results from "./results/ResultsBody";
import { setData, getDataQuery, toggleDeals, toggleLogin,
  loginRequest, setResults } from '../actions/actions'

/* Here start all react things */
class Main extends PureComponent {
  
  // Get parameters from initial state to get data for chart 
  componentWillMount() {
    this.props.getDataQuery(this.props.form.header.values)
  }

  render() {
    /* 
      * Render chart if only data had been fetched, or 
      * react-stockchart will crash 
    */ 
   const valuesForQuery = this.props.form.header.values
   
    return (
      <div>
        <Header
          companyName = {this.props.form.header.values.symbol}
          onClickChange ={() => this.props.getDataQuery(valuesForQuery)}
          valuesForQuery = {this.props.form.header.values}
          showLogin = {this.props.header.show.login}
          toggleLogin = {this.props.toggleLogin}
          isAuthed = {this.props.header.isAuthed}
          loginRequest = {() => this.props.loginRequest(this.props.form.login? 
            this.props.form.login.values : null)}
          valuesForLogin = {this.props.form.login? 
            this.props.form.login.values : null}
        />
        <div style = {{width: '70%', display: 'inline-block', marginTop: '40px'}}>
          {this.props.data.dataError?
           <h2>API do not response to query, please repeat later</h2> : null
          }
          {this.props.data.data &&
            <RSIChart
              data={this.props.data.data}
              width ={window.innerWidth * 0.65}
              height ={400}
            />
          }
        </div>
        <StrategyBuilder
          strategy = {this.props.form.strategy.values}
          applyStrategy = {() => this.props.setResults({data: this.props.data.data,
            strategy: this.props.form.strategy.values})}
        />
        <Results
            results = {this.props.results.results}
            toggleDeals = {this.props.toggleDeals}
            showDeals = {this.props.results.showDeals}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getDataQuery: dataQuery => {dispatch(getDataQuery({dataQuery}))},
  setData: data => {dispatch(setData(data))},
  toggleDeals: () => {dispatch(toggleDeals())},
  toggleLogin: () => {dispatch(toggleLogin())},
  loginRequest: input => {dispatch(loginRequest(input))},
  setResults: result => {dispatch(setResults(result))},
})

Main.propTypes = {
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)