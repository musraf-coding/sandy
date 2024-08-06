//add_two_num.js

//input[1,2,4,6,8] target =6 output =[1,2] becaue 1=2, 2=4 so 2+4=6




const adTwo =(num,target)=>{

    for(let i =0;i<=num.length; i++){
        for(let j=1;j<=num.length;j++){

            if(num[i]+num[j]===target) return [i,j]
        }
    }
}
console.log(adTwo([1,2,3,4],7))