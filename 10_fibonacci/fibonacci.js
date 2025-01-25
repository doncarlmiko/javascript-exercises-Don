const fibonacci = function(fibonacciSequenceposition) {

    let fibonacciSequenceNum = Number(fibonacciSequenceposition);
    const fibonacciSequenceArray = [1,1];
    let fibonacciLoopCounter = 0;
    let fibonacciSum;

    for(fibonacciLoopCounter = 1; fibonacciLoopCounter <fibonacciSequenceNum; fibonacciLoopCounter++){

        //if(fibonacciLoopCounter >=1){
            fibonacciSum = fibonacciSequenceArray[fibonacciSequenceArray.length-1] + fibonacciSequenceArray[fibonacciLoopCounter-1];

            fibonacciSequenceArray.push(fibonacciSum);
        //}
    }
    
    if(fibonacciSequenceNum === 0){
        return 0;
    }
    else if(fibonacciSequenceNum < 0){
        return "OOPS";
    }

    else{
        return fibonacciSequenceArray[fibonacciSequenceNum-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
