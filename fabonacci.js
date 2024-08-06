
// let febonacci =(x)=>{
//     const arr =[0,1];
// for(let i=2;i<=x;i++){
//    arr.push(arr[i-1]+arr[i-2])
// }
// return arr
// }
// const res =febonacci(7);
// console.log(res);


const fib =(x)=>{

    if(x<=1)return x;

    return fib(x-1)+fib(x-2);

}
console.log(fib(3))