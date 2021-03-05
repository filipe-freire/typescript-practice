"use strict";
// import * as _ from "lodash"
let lucky = 23; // type is infered
let lucky2 = 23;
// lucky = "" // no good!
lucky2 = '23'; // valid!
let font;
const person = {
    firstName: 'Jeff',
    lastName: 'Lolz'
};
// Enforce argument types
function pow(x, y) {
    // if instead of string we have void, it means the function
    //doesn't return anything, just has side effects
    return Math.pow(x, y).toString();
}
// Enforce type of elements inside an array
const arr = [];
// arr.push("23") // fails, because we enforced number type!
arr.push(23); // passes, because we enforced number type!
const newArr = [];
// gives us an error although we're pushing the elements below
// because it expects us to define the array upfront
// to solve that, we make the strong typing optional
// by using the question mark syntax
newArr.push(1);
newArr.push('hey!');
newArr.push(true);
