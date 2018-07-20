import { getRSI, getEMA } from './indicators'


export function tradeProcessor(data, { indicator, capital = 2000, valueCondition, qty,
    risk, condition, stopLoss, passAfterLoss, exitCause, exitAmount, rsiStep, emaStep}){

    let pose = {
        price: '',
        qty: 0,
        direction: ''
    }
    let deals = []
    let profit = 0
    let loss = 0
    let willTrade = true
    let loseI = 0
    let lessOrMore = false
    let buy 
    let sell

    const round = (num) => {
       return Math.round(num*100)/100
    }

    condition ==='<' && indicator === 'rsi' ? buy = true : sell = true
    switch(indicator) {

        /* 
            *
            * RSI case
            * 
        */
        case 'rsi': 
            let rsi = getRSI(data, rsiStep)
            rsi.forEach((d, i) => {
                // if loss was accuired recently or stop loss number are reached, do not trade
                if (loseI - i > 0 || loss > stopLoss) {
                    willTrade = false
                } else willTrade = true
                lessOrMore = false
                // Conditions for trade exacution are done?
                if (d.close < valueCondition && condition ==='<') lessOrMore = true
                if (d.close > valueCondition && condition ==='>') lessOrMore = true
                
                // If there are no pose and conitions are done and losses are ok 
                if (pose.qty === 0 && lessOrMore && willTrade) {

                    //make deal with received qty of contract 
                    pose.qty = qty
                    //for simplicity take middle price of the day
                    pose.price = (data[i].high + data[i].low) / 2
                    pose.direction = 'buy'
                    deals.push(`On ${i} buy with price : ${pose.price}`)
                    for (let y = i; y < data.length; y++) {
                        // If robot in pose and price hit risk 
                        if (pose.qty !== 0 && data[y].low < pose.price 
                                * (100 - risk) / 100) {
                            //robot get losses 
                            loss += round(pose.price * pose.qty * 0.02)
                            pose.qty = 0
                            //set to pass some intervals after loss
                            loseI = i + passAfterLoss
                            deals.push(`On ${i} close with loss : ${loss}`)
                            break
                        }
                        //Calculating current amount of profit
                        let profitBuy = ((data[y].high + data[y].low) / 2 - pose.price) * pose.qty 
                        let profitSell = (pose.price - (data[i].high + data[i].low) / 2) * pose.qty
                        
                        // chacking  if profit is enough for exit
                        let profitEnoughBuy = (exitCause === '%' && profitBuy > exitAmount && buy)
                        let profitEnoughSell =  (exitCause === '%' && profitSell > exitAmount && sell)
                
                        if (pose.qty !== 0 && (profitEnoughBuy || profitEnoughSell)) {
                            profitEnoughBuy ? profit += profitBuy : profit += profitSell
                            pose.qty = 0
                            deals.push(`On ${y} close pose on price ${data[y].close} with profit : ${round(profit)}`)
                        }
                    }
                }
            })

            return { result: (capital + round(profit) - round(loss)),
                                deals,
                                loss: `${round(loss)}`,
                                profit: `${round(profit)}`
                                }
            
        /* 
            *
            * EMA case
            * 
        */

        case 'ema': 
            let ema = getEMA(data, emaStep)
            let emaPosition = ''
            
            //setting initial ema position
            if (ema[10].ema && ema[10].ema < data[10].low) emaPosition = 'under'
            if (ema[10].ema && ema[10].ema > data[10].high) emaPosition = 'above'
            
            ema.forEach((d, i) => {
                // Checking if total loss less then maximum loss
                // if loss was accuired recently or stop loss number are reached, do not trade
                if (loseI - i > 0 ||loss > stopLoss) {
                    willTrade = false
                } else willTrade = true
                
                // Monitoring current position of ema and trade if price closing 
                // under/above ema
                if (emaPosition === 'under' && d.ema > data[i].close && willTrade && pose.qty === 0) {
                    pose.direction = 'sell'
                    pose.price = round(data[i].high + data[i].low) / 2
                    pose.qty = qty
                    emaPosition = 'above'
                    console.log(`new pose sell with price ${pose.price} on ${data[i].date}`);
                    
                }
                if (emaPosition === 'above' && d.ema < data[i].close && willTrade && pose.qty === 0) {
                    pose.direction = 'buy'
                    pose.price = round(data[i].high + data[i].low) / 2
                    pose.qty = qty
                    emaPosition = 'under'
                    console.log(`new pose buy with price ${pose.price} on ${data[i].date}`);
                }
               
                    for (let y = i; y < data.length; y++) {
                        // If robot in pose and price hit risk 
                        if (pose.qty !== 0 && data[y].low < pose.price 
                                * (100 - risk) / 100) {
                            //robot get losses 
                            loss += round(pose.price * pose.qty * 0.02)
                            pose.qty = 0
                            //set to pass some intervals after loss
                            loseI = i + passAfterLoss
                            console.log(`On ${i} close with loss : ${loss}`);
                            break
                        }
                    }
                
                //Calculating current amount of profit
                let profitBuy = ((data[i].high + data[i].low) / 2 - pose.price) * pose.qty 
                let profitSell = (pose.price - (data[i].high + data[i].low) / 2) * pose.qty
        
                // chacking  if profit is enough for exit
                let profitEnoughBuy = (exitCause === '%' && profitBuy > exitAmount && buy)
                let profitEnoughSell =  (exitCause === '%' && profitSell > exitAmount && !buy)
        
                if (pose.qty !== 0 && (profitEnoughBuy || profitEnoughSell)) {
                    profitEnoughBuy ? profit += profitBuy : profit += profitSell
                    pose.qty = 0
                    console.log(`On ${i} close pose on price ${data[i].close} with profit : ${round(profit)}`)
                }
            })

            return capital + round(profit) - round(loss)
        default: return 'there are crash in trade logic'
    }
    

}