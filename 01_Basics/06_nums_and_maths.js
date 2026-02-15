const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length());
console.log(balance.toFixed(2)); // will fix the decimal places 

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(2));

const hundreds = 100000
console.log(hundred.toLocaleString()); // will give international standard value
console.log(hundred.toLocaleString("en-IN")); // will give acc to indian number system 

// *********** MATHS **************** // 

console.log(Math);
console.log(Math.abs(-4)); // will result into +4 but +4 will remain +4.

console.log(Math.round(4.3)); 
console.log(Math.ceil(4.6)); // will take upper value
console.log(Math.floor(4.8)); // will take the lower value

console.log(Math.max(49, 90, 86, 29)); // will give max number from this
console.log(Math.min(49, 90, 86, 29));  // will give min number from this

console.log(Math.random());
console.log(Math.random()*10 + 1); 





