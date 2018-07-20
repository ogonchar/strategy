import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import '../css/main.css'

import RSIChart from './charts/RSIChart'
import Header from './header/Header'
import StrategyMaster from '../containers/strategy'
import Results from "./results/ResultsBody";
import { setData, getDataQuery, toggleDeals } from '../actions'


const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getDataQuery: dataQuery => {dispatch(getDataQuery({dataQuery}))},
  setData: data => {dispatch(setData(data))},
  toggleDeals: () => {dispatch(toggleDeals())},
})

class Main extends PureComponent {
  state = {
    interval: 'day',  
    outputsize: 'compact',
    symbol: 'aapl',
    apikey: '1BI6YDAWRHP1U8OI'
  }

  onCompanyChange(e) {
    this.setState({
      symbol: e.target.value
    })
  }

  onChangeInterval(e) {
    this.setState({
      interval: e.target.value
    })
  }

  onClickChange() {
    this.props.getDataQuery({
      symbol: this.state.symbol, 
      interval: this.state.interval,
      outputsize: this.state.outputsize,
      apikey: this.state.apikey,
    })
  }

  componentWillMount() {
    this.props.getDataQuery({
      symbol: this.state.symbol, 
      interval: this.state.interval,
      outputsize: this.state.outputsize,
      apikey: this.state.apikey,
    })
  }
    
  render() {
    if (this.props.data.length === 0) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Header
          companyName = {this.props.query.query.dataQuery.symbol}
          onChangeInterval = {(e) => this.onChangeInterval(e)}
          onCompanyChange = {(e) => this.onCompanyChange(e)}
          onClickChange ={() => this.onClickChange()}
        />
        <div style = {{width: '70%', display: 'inline-block', marginTop: '40px'}}>
          {!Object.keys(this.props.data).includes('dataError')?
            <RSIChart
              data={this.props.data.data} 
              onClick={() => this.onClickChange()}
              width ={window.innerWidth * 0.65}
              height ={400}
            />
            :
            <h2>Api do not response to query</h2>
          }
        </div>
        <StrategyMaster/>
        <Results
            results = {this.props.results}
          />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)