let elves = //input data turned into multiline string

//defining variables to be accessed locally within file
let strArray;
let numArray;

/* Building class to reformat the data into a list.
   First, we take the string of numbers and replace \n with " ".
   We then use the split method to create a list.
   After the list is created, we need to turn the values which are currently strings into numbers.
   We implement a map function to change the type of all items in the list.
*/
/*
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
*/
let strArray2;
let numArray2;

const formatTheArray = () => {
    numArray2 = elves.replaceAll(`\n`, " ").split(" ").map(Number)
    return numArray2;
}

formatTheArray()

//instantiating class and storing values in variables to be used later 
//let myFormat = new Formatter(elves)
//let myStrArray = myFormat.makeArray()
let newNumArray = myFormat.makeNum(myStrArray)

//combining items in list -- 0 is the 'separation' mark for different elves 
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
//stored output of elfGains in variable
let stringNestedArr = elfGains()

const maybeMap = fn => x => Array.isArray(x) ? x.map(maybeMap(fn)) : fn(x);
const numberify = maybeMap(Number)
let numberedNestedArr = numberify(stringNestedArr)


let arr = [];
let finalArr;

//finalArr is a new array made of the values from newwy 
for (let i=0; i < numberedNestedArr.length; i++){
    const swolElves = numberedNestedArr.filter((element) => element[i] !== 0)
    arr.push(swolElves[i].reduce((a,b) => a + b))
   //remove all of the [0] values for cleaner data
   finalArr = arr.filter(x => x !== 0)
   
}
//get max value
let maximum = Math.max(...finalArr)

//ANSWER
console.log(maximum)


//PART 2

const top3 = () => {
   //sorts descending
   finalArr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)
   //top 3 added together
   return finalArr[0] + finalArr[1] + finalArr[2]
}

//ANSWER
console.log(top3())

