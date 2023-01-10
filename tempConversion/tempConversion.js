// converts from fahrenheit to celcius 
const convertToCelsius = function(input) {

  let output = (input - 32) * 5/9;
  output = Math.round(output * 10) / 10;

  return output;
};


// converts from celcius to fahrenheit
const convertToFahrenheit = function(input) {

  let output = (input * 1.8) + 32;
  output = Math.round(output * 10) / 10;

  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
