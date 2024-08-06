// anagram is car != rat false

// dog =god true

const isAnagram =(s,t)=>{
if(s.length != t.length)return false;

    else if(s.split("").sort().join("") === t.split("").sort().join("")){
        return true
    }
}
console.log(isAnagram("musraf","fmusra"))