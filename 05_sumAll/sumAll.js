const sumAll = function(num1,num2) {

    if(num1 <0 || num2 <0){
        return 'ERROR';
    }

    if(typeof num1 !=='number' || typeof num2 !== 'number' || Array.isArray(num1) || Array.isArray(num1)){
        return "ERROR";
    }

    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }

    let getMin = num1 < num2 ? num1 : num2;
    let getMax = num1 > num2 ? num1 : num2;
    let totalSum = 0;

    for(let i = getMin; i <=getMax; i++){
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
