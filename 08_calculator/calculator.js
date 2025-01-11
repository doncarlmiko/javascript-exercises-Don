const add = function(numAddend1,numAddend2) {
  const sum = numAddend1 + numAddend2;
  return sum;
};

const subtract = function(Minuend, subtrahend) {
	const difference = Minuend - subtrahend;
  return difference;
};

const sum = function(addendArray) {
  //const addendArrayNumbers = new Array(addendArray);
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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
