//let elves = [data]
let strArray;
let numArray;
class Formatter {
    constructor(elves){
        this.elves = elves
    }
    makeArray = () => {
       strArray = this.elves.replaceAll(`\n`, " ").split(" ")
       return strArray;
    }
    makeNum = () => {
       numArray = strArray.map(Number)
        return numArray;
    }  
}

let myFormat = new Formatter(elves)
let myStrArray = myFormat.makeArray()
let newNumArray = myFormat.makeNum(myStrArray)

let obj;
function elfGains () {
let arr = []
   obj = newNumArray
        .join('#')
        .split(/(?:^|#)(0)(?:#|$)/)
        .filter(Boolean)
        .map(v => v.split('#') )
    return obj;
}
let stringNestedArr = elfGains()

const mapToConvertToNums = fn => x => Array.isArray(x) ? x.map(mapToConvertToNums(fn)) : fn(x);
const numberify = mapToConvertToNums(Number)
let numberedNestedArr = numberify(stringNestedArr)

let arr = [];
let finalArr;
for (let i=0; i < numberedNestedArr.length; i++){
    const swolElves = numberedNestedArr.filter((element) => element[i] !== 0)
    arr.push(swolElves[i].reduce((a,b) => a + b))
    finalArr = arr.filter(x => x !== 0)
}
let maximum = Math.max(...finalArr)
console.log(maximum) //ANSWER

//PART 2
const top3 = () => {
   finalArr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)
   return finalArr[0] + finalArr[1] + finalArr[2]
}
console.log(top3()) //ANSWER

