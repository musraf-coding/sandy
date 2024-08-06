

const palindrom =(a)=>{

    return a<0 ? false : a=== + a.toString().split("").reverse().join("");
}
const res=palindrom(-343);
console.log(res)