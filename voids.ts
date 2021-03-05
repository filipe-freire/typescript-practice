function add2(n1: number, n2: number) {
  return n1 + n2;
}

// We want to use void when we do not have a return statement
// We would use undefined if we returned nothing. e.g: return;
function printResult2(num: number): void {
  console.log('Result: ' + num);
}

printResult2(add2(5, 12));

// if we are to assign a variable to a function, we should define its type
// as a function, to prevent future accidental reassignment!

let combineValues;
combineValues = add2;
combineValues = 5;

console.log(combineValues(5, 5)); // will throw an error due to the reassignment above!
// right way, with function types:
// let combineValues: (num1: number, num2: number) => number

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(10, 20, result => {
  //since we have defined above that the callback will always
  // take one argument, a number;
  // we can perform operations on it safely knowing that!
  console.log(result);
});
