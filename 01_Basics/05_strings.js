const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log("hello my name is ${name} and my repoCount is ${repoCount}" );

const gameName = new String('hitesh-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt[2]); // what char is at 2nd place in string 
console.log(gameName.indexOf['t']); // what's the posn of char 't' in string 

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


// in the case of substring we can't do the negative indexing but in case of slice we can. 
// if we give negative indexing for substring it will treat it as 0 only. 

const newStringOne = "    hiteshC   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://roman.com/hitsh%20cha"

console.log(url.replace("%20", "-"));

console.log(url.includes("roman"));

console.log(gameName.split('-'));





