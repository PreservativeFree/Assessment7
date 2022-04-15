const perf = require('execution-time')();


function doublerAppend(nums) { //push

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
}


function doublerInsert(nums) { //unshift

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray); //using push
let resultsAppendTiny = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop(); //using unshift

console.log('Results for the tinyArray');
console.log("insert", resultsInsertTiny.preciseWords);
console.log("append", resultsAppendTiny.preciseWords);

perf.start();                     
doublerAppend(smallArray); 
let resultsAppendSmall = perf.stop(); 


perf.start();
doublerInsert(smallArray);
let resultsInsertSmall = perf.stop(); 

console.log('Results for the smallArray');
console.log("insert", resultsInsertSmall.preciseWords);
console.log("append", resultsAppendSmall.preciseWords);


perf.start();
doublerAppend(mediumArray); 
let resultsAppendMedium = perf.stop(); 


perf.start();
doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop(); 

console.log('Results for the Medium Array');
console.log("insert", resultsInsertMedium.preciseWords);
console.log("append", resultsAppendMedium.preciseWords);

perf.start();                     
doublerAppend(largeArray); 
let resultsAppendLarge = perf.stop();

perf.start();
doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();
console.log('Results for the largeArray');
console.log("insert", resultsInsertLarge.preciseWords);
console.log("append", resultsAppendLarge.preciseWords);


perf.start();                     
doublerAppend(extraLargeArray); 
let resultsAppend = perf.stop(); 


perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop(); 

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

