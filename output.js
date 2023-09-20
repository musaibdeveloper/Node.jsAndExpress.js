const x = "1";

const y = "2";

// console.log(x, y);

// // Format specifier

// // %s format varaiable to sting.
// // %d is for number.
// // % i for interger.
// // %o for object

// console.log("I am %s and my %d", 'Musaib' , 21);

// // console.clear()
// console.count("Musaib")
// console.count("Musaib");
// console.count("Musaib");
// console.countReset("Musaib")
// console.count("Musaib");
// console.count("syed");

// const function1 = () => {
//     console.trace();
// }

// const function2 = () => function1();

// function2();

// How to calculate the time of output.

const sum = () => console.log(`The sum of 2 and 4 is ${2 + 4}`);
const multiply = () => console.log(`The mutiply of 5 and 6 ${6 * 5}`);

const measureTime = () => {
  console.time("sum()");
  sum();
  console.timeEnd("sum()");

  console.time("multiply()");
  multiply();
  console.timeEnd("multiply()");
};

measureTime();
