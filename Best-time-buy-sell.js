
//Best-time-buy-sell.js
// input [7,1,5,3,6,4] out put =5


const maxProfit =(prices)=>{

     let profit = 0;
    for(let i =0;i<=prices.length; i++){
        for(let j=1;j<=prices.length;j++){

            const curprofit =prices[j]-prices[i];
            if(curprofit>profit){
                profit =curprofit
            }
        }
    }

    return profit;
}
console.log(maxProfit([7,1,5,3,6,4]))
