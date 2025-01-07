const convertToCelsius = function(fahrenheitValue) {
  //Formula for converting Fahrenheit to Celsius
  const convertToCelsius = (fahrenheitValue-32)/1.8;
  let roundConvertToCelsius = Math.round(convertToCelsius*10)/10;

  return roundConvertToCelsius;
};

const convertToFahrenheit = function(celciusValue) {
  //Formula for converting Celsius to Fahrenheit
  const convertToFahrenheit = (celciusValue * 1.8) + 32;
  let roundConvertToFahrenheit = Math.round(convertToFahrenheit*10)/10;

  return roundConvertToFahrenheit;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
