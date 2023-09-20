// How to pass any argument.

const minimist = require("minimist");

// console.log(process.argv);
// console.log(process.argv.slice(2)[3]);

// process.argv.forEach((val , index) => {
//     console.log(`${index} : ${val}`);
// })

const argNew = minimist(process.argv);
console.log(argNew.name);
