export function getRSI (data, period) {
    let firstAverageGain = 0
    let firstAverageLoss = 0
   
    let rsiArray = []
  
  
  
    for (let i  = 0; i < period; i++){
      rsiArray[i]={}
      rsiArray[i].date = data[i].date
      let geinLoss = data[i+1].close - data[i].close
      rsiArray[i].gain = geinLoss > 0 ? geinLoss : 0
      rsiArray[i].loss = geinLoss > 0? 0 : geinLoss
      firstAverageGain += rsiArray[i].gain
      firstAverageLoss -= rsiArray[i].loss
    }
    rsiArray[period] ={}
    rsiArray[period].date = data[period].date
    rsiArray[period].averageGain = firstAverageGain/14
    rsiArray[period].averageLoss = firstAverageLoss/14
   
    rsiArray[period].rs = rsiArray[period].averageGain
      /rsiArray[period].averageLoss
      rsiArray[period].close = 100 - 100 / (1 + rsiArray[period].rs)
    
    for (let i = period+1; i < data.length -1; i ++) { 
      rsiArray[i] = {}
      rsiArray[i].date = data[i].date
      let geinLoss = data[i+1].close - data[i].close
      rsiArray[i].gain = geinLoss > 0 ? geinLoss : 0
      rsiArray[i].loss = geinLoss > 0? 0 : geinLoss
      
      
      rsiArray[i].averageGain = (rsiArray[i-1].averageGain
        *(period - 1) + rsiArray[i].gain) / period
      rsiArray[i].averageLoss = (rsiArray[i-1].averageLoss
        *(period - 1) - rsiArray[i].loss) / period
      rsiArray[i].rs = rsiArray[i].averageGain/rsiArray[i].averageLoss
      rsiArray[i].close = 100 - (100 / (1 + rsiArray[i].rs))
      
    }
    return rsiArray  
  }
  
  
  export function getEMA (data, period) {
    let emaArray =[]
    let sumInit = 0
    let multiplier = (2/ (period + 1 ))
  
    for (let i  = period -1 ; i >= 0; i--){
      sumInit += data[i].close
    }
    sumInit = sumInit/period
    
    
    emaArray[period] = {}
    emaArray[period].date = data[period].date
  
    emaArray[period].ema = data[period].close 
      * multiplier + sumInit * (1-multiplier)
    for (let i = period + 1; i < data.length; i ++) { 
      emaArray[i] = {}
      emaArray[i].date = data[i].date
      emaArray[i].ema = data[i].close 
      * multiplier + emaArray[i-1].ema * (1-multiplier)
    }
    return emaArray
  }
  
  export function getMACD (data, periodOne, periodTwo, periodSignal) {
    let macdArray =[]
    let emaPeriodOne = getEMA(data, periodOne)
    let emaPeriodTwo = getEMA(data, periodTwo)
    for(let i = 0 ; i < periodTwo; i ++) {
      macdArray[i] = {}
      macdArray[i].date = data[i].date
      macdArray[i].macd = 0
    }
    for (let i = periodTwo; i < data.length; i ++) { 
      macdArray[i] = {}
      macdArray[i].date = data[i].date
      macdArray[i].macd = emaPeriodOne[i].ema - emaPeriodTwo[i].ema
    }
    let macd =[]
    for (let i = 0; i < macdArray.length; i ++ ) {
      macd[i] ={}
      macd[i].close = macdArray[i].macd
    }
    let signal = getEMA(macd, periodSignal)
    
    for (let i = 0; i < macdArray.length - periodSignal; i ++ ) {
      macd[i] ={}
      macd[i].signal = signal[periodSignal+i].ema
    }
    return macdArray
  }
  