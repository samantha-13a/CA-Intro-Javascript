// This is the day's forecast in Kelvin. This value will not change.
const kelvin = 0;
var celsius = kelvin - 273;
// Celsius = 273 degrees less than Kelvin.
let farenheit = celsius * (9/5) +32;
// In the line above we calculated the temperarture of the day in farenheit.
farenheit = Math.floor(farenheit);
// The value of farenheit remained the same. Farenheit may sometimes be a decimal.
console.log(`The temperature is ${farenheit} degrees in Fahrenheit.`)
let newton = celsius * (33/100);
console.log(newton);
newton = Math.floor(newton);
console.log(newton);
console.log(`The temperature is ${newton} degrees in Newton.`);
