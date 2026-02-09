const convertToCelsius = function (temp) {
  const celsius = Math.round((temp - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function (temp) {
  const fahrenheit = Math.round(((temp * 9) / 5 + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
