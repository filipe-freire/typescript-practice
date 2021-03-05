// import * as _ from "lodash"

let lucky = 23; // type is infered
let lucky2: any = 23;

// lucky = "" // no good!
lucky2 = '23'; // valid!

// we can create our own types from scratch

type Style = 'bold' | 'italic';

let font: Style;

// font = "something" // not valid! is either bold or italic

// INTERFACES

interface Person {
  firstName: String;
  lastName: String;
}

const person: Person = {
  firstName: 'Jeff',
  lastName: 'Lolz'
};

// Enforce argument types

function pow(x: number, y: number): string {
  // if instead of string we have void, it means the function
  //doesn't return anything, just has side effects
  return Math.pow(x, y).toString();
}

// Enforce type of elements inside an array

const arr: number[] = [];

// arr.push("23") // fails, because we enforced number type!
arr.push(23); // passes, because we enforced number type!

// tuples!

type MyList = [number?, string?, boolean?];

const newArr: MyList = [];
// gives us an error although we're pushing the elements below
// because it expects us to define the array upfront
// to solve that, we make the strong typing optional
// by using the question mark syntax

newArr.push(1);
newArr.push('hey!');
newArr.push(true);
