
export const dealResult = (data, pose, risk, loss, passAfterLoss, deals, exitCause, 
    exitAmount, buy, sell, profit, i) => { 
      
    let loseIndex = 0
    for (let y=0; y < data.length; y++) {
        
        // If robot in pose and price hit risk 
        if (pose.qty !== 0 && data[y].low < pose.price 
                * (100 - risk) / 100) {
            //robot get losses 
            deals.push(`On ${i + y} close with loss : ${round(pose.price * pose.qty * 0.02)}`)
            loss += round(pose.price * pose.qty * 0.02)
            pose.qty = 0
            //set to pass some intervals after loss
            loseIndex = y + passAfterLoss
            break
        }
        //Calculating current amount of profit
        let profitBuy = ((data[y].high + data[y].low) / 2 - pose.price) * pose.qty 
        let profitSell = (pose.price - (data[y].high + data[y].low) / 2) * pose.qty
        
        // chacking  if profit is enough for exit
        let profitEnoughBuy = (exitCause === '%' && profitBuy > exitAmount && buy)
        let profitEnoughSell =  (exitCause === '%' && profitSell > exitAmount && sell)
    
        if (pose.qty !== 0 && (profitEnoughBuy || profitEnoughSell)) {
            deals.push(`On ${i + y} close pose on price ${data[y].close} 
            with profit : ${round(profitEnoughBuy ?  profitBuy : profitSell)}`)
            profitEnoughBuy ? profit += profitBuy : profit += profitSell
            pose.qty = 0
            
            break
        }
        
    }
    return {
        pose,
        loss,
        profit,
        deals,
        loseIndex
    }
    
}

const round = (num) => {
    return Math.round(num*100)/100
 }