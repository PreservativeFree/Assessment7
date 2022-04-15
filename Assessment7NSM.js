// Sum Zero
let check = 0;
let zeroFound = 0;
let numFound = false;

let isUnique = false;
let findMax = 0;

const addToZero = function(oneArray) {
    for(let i = 0; i < oneArray.length; i++) {
        check = oneArray[i]*(-1); 
       if (check == 0) {
           zeroFound++;
       }
       if(zeroFound == 2) { 
           numFound = true;
           return true;
       }
       for(let y = 0; y < oneArray.length; y++) { 
            if(check == oneArray[y] && check != 0) { 
               numFound = true;
               return true
           } 
        } //end 2nd for
        if(numFound == true)
            return true
    }
    if(numFound != true)
        return false
}
//time complexity O(n^2)
//space complexity O(n^2)
const hasUniqueChars = function(userWord) {
    let userString = userWord;
    let strArray = userString.split("");
    for (let i = 0; i < strArray.length; i++) { 
        for (let j = 0; j < strArray.length; j++) {
            if(strArray[i] == strArray[j] && i != j) {
                isUnique = false;
                return isUnique;
            }
        }
    }
    isUnique = true;
    return isUnique;
}
//time complexity O(n^2)
//space complexity O(n^2)
const isPangram = function(str) {
    
        let letters = {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
          i: 0,
          j: 0,
          k: 0,
          l: 0,
          m: 0,
          n: 0,
          o: 0,
          p: 0,
          q: 0,
          r: 0,
          s: 0,
          t: 0,
          u: 0,
          v: 0,
          w: 0,
          x: 0,
          y: 0,
          z: 0,
        }
      
        str = str.toLowerCase()
        const splitStr = str.split('')
      
        splitStr.forEach(char => {
          if (letters.hasOwnProperty(char)) {
            letters[char]++
          }
        })

      for(const property in letters) {
        if(letters[property] == 0){
            return false
        }

    }
    return true
}
//time complexity O(n)
//space complexity O(n)
const findLongestWord = function(arrayStr) {
    const arrayLengths = []

    for(let i=0; i < arrayStr.length; i++) {
      arrayLengths.push(arrayStr[i].length)
   }
   for(let i = 0; i < arrayLengths.length; i++) {
        if(findMax < arrayLengths[i]) {
            findMax = arrayLengths[i] 
        }
   }
   return findMax
}

//time complexity O(n)
//space complexity O(n)

let myArray = [1, 2, 3, -2]
console.log(addToZero(myArray))

let sentence = "Mondamy"
console.log(hasUniqueChars(sentence))

let nextSentence = "The quick brown fox jumps over the lazy dog!"
console.log(isPangram(nextSentence))

let nextSentenceTwo = ["hi", "hello"]
console.log(findLongestWord(nextSentenceTwo));

