
/* 
  * function fetch data from alphaventage. 
*/
export function getData(symbol, interval, outputsize, apikey) {
  
  const LINK = 'https://www.alphavantage.co/query?'
  
  //Converting intervals to api readeble values

  let func = 'TIME_SERIES_INTRADAY';
  let timeseries = `Time Series (${interval})`
  if (interval === 'day' ) {
    func = 'TIME_SERIES_DAILY' ; 
    timeseries='Time Series (Daily)'
  }
  if (interval === 'week' ) {
    func = 'TIME_SERIES_WEEKLY' ;
    timeseries='Weekly Time Series'
  }
  if (interval === 'month' ) {
    func = 'TIME_SERIES_MONTHLY'; 
    timeseries='Monthly Time Series'
  }
  
  //construct request link based on received parameters
  const link = `${LINK}function=${func}&symbol=${symbol}` +
  `&interval=${interval}&outputsize=${outputsize}&apikey=${apikey}`
  
  const promiseData = fetch(link)
    .then(function(response) {
      return  response.json()
    })
    .then((response) => {
      return response[timeseries]
    })
    .then((data) => {
      let values = Object.values(data)
      let keys = Object.keys(data)
      let dataArray = []
      values.forEach((v,i) => {
        dataArray[i] = {}
        dataArray[i].open = Number.parseFloat(v['1. open'])
        dataArray[i].high = Number.parseFloat(v['2. high'])
        dataArray[i].low = Number.parseFloat(v['3. low'])
        dataArray[i].close = Number.parseFloat(v['4. close'])
        dataArray[i].volume = Number.parseFloat(v['5. volume'])
      })
      keys.forEach((k,i) => {
        dataArray[i].date = new Date(k)
      })
      return dataArray
    })
    return promiseData;
}

