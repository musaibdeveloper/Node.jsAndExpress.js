const minimist = require("minimist")

// How to pass any argument.
// console.log(process.argv)

// process.argv.forEach((value, index) => {
//     console.log(`${index} ${value}`);
// })

const argNew = minimist(process.argv.slice(2));

console.log(argNew.name)

// Use -- Always. 
// With Minimist we can read the arguments values