const fibonacci = function(fibonacciSequenceposition) {
    const fibonacciSequenceArray = [1,1];
    let fibonacciLoopCounter = 0;
    let fibonacciSum;
    for(fibonacciLoopCounter =1; fibonacciLoopCounter <fibonacciSequenceposition; fibonacciLoopCounter++){
        
            fibonacciSum = fibonacciSequenceArray[fibonacciSequenceArray.length-1] + fibonacciSequenceArray[fibonacciLoopCounter-1];

            fibonacciSequenceArray.push(fibonacciSum);
    }
    return fibonacciSequenceArray[fibonacciSequenceposition-1];

};

// Do not edit below this line
module.exports = fibonacci;
