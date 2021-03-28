/* UNION TYPES */
// creating aliases for our union types
type Combinable = number | string;
type ConversionOptions = 'as-number' | 'as-text';

interface CombineParams {
  input1: Combinable;
  input2: Combinable;
  resultConversion: ConversionOptions;
}

function combine({input1, input2, resultConversion}: CombineParams) {
  // although an addition of number and string is possible, typescript
  // doesn't know those are our chose union types, so it throws an error
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine({input1 : 30, input2 : 26, resultConversion : 'as-number'});
console.log('🚀 ~ file: app.ts ~ line 28 ~ combinedAges', combinedAges);
