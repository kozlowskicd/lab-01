'use strict';
const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
console.log(greet('JOHN'));
console.log(math.add(1,2)); // 4
console.log(math.subtract(1,3)); // -2
console.log(math.multiply(5,9)); // 45
console.log(math.divide(6,3)); // 2
console.log(math.divide(0,5)); // 0
console.log(math.divide(5,0)); // null
