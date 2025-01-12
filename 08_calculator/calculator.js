const add = function(numAddend1,numAddend2) {
  const sum = numAddend1 + numAddend2;
  return sum;
};

const subtract = function(Minuend, subtrahend) {
	const difference = Minuend - subtrahend;
  return difference;
};

const sum = function(addendArray) {

  let addendCounter = 0;
  let sumArray = 0;

  if(addendArray.length === 0){
    return addendArray.length;
  }

  for(addendCounter = 0; addendCounter < addendArray.length; addendCounter++){
    sumArray += addendArray[addendCounter];
  }

  return sumArray;

};

const multiply = function(factorArray) {
  
  let factorCounter = 0;
  let productArray = 1;

  if(factorArray.length === 0){
    return factorArray.length
  }

  for(factorCounter = 0; factorCounter < factorArray.length; factorCounter++){
    productArray *= factorArray[factorCounter];
  }

  return productArray;
};

const power = function(baseNumber, raiseToPower) {
	let powerProduct = 1;
  let powerCounter;

  for(powerCounter = 1; powerCounter <=raiseToPower; powerCounter++){
    powerProduct *= baseNumber;
  }

  return powerProduct;
};

const factorial = function(factorialNumber) {
  let factorialProduct = factorialNumber;
  let factorialCounter;

  if(factorialNumber === 0){
    return 1;
  }
  
  for(factorialCounter=1; factorialCounter < factorialNumber; factorialCounter++){
    factorialProduct *= factorialCounter;
  }
  return factorialProduct;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
