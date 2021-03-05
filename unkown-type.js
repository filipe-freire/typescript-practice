"use strict";
let userInput;
let userName;
// with unknown we have to check the type first
// before assigning it, in the case of pointing
// to another variable
userInput = 5;
userInput = 'Max';
// userName = userInput; // fails to compile!
if (typeof userInput === 'string') {
    userName = userInput; // but this works! 'cause we checked first
}
// we could use union types instead,
// if we know the types of values we
// expect the variable to point to!
// never type, makes clear that the function is intended to never
// return anything. It breaks the script!
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error has occured', 500);
