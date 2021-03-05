// const person3: {
//   //! typescript infers the type of the properties
//   //! so this is for pure demonstrating purposes
//   // if we want to enforce just these properties
//   // it's a typescript representation of an object type
//   name: string;
//   age: number;
//   isAWebDev: boolean
// } = {

/* ENUMS */

// ADMIN = 0
// READ_ONLY = 1
// AUTHOR = 2

// we can assign our own enums!
// READ_ONLY would equal 6 and AUTHOR 7.
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR };
 

enum Role {ADMIN, READ_ONLY, AUTHOR };

const person3: {
  name: string;
  age: number;
  isAWebDev: boolean;
  hobbies: string[];
  // Tuple!
  role: [number, string]; 
  // enforces a special array with exactly 2 elements,
  // 1st a number, 2nd a string
  enumRole: number
} = {
  name: 'Filipe',
  age: 24,
  isAWebDev: true,
  hobbies: ['Music', 'Coding', 'Financing'],
  // Tuple!
  role: [2, "author"],
  enumRole: Role.ADMIN
};

//! TypeScript does not catch this error!
// In this case, "admin" is still pushed to the tuple
person3.role.push("admin")
console.log(person3.role)

let favouriteActivities: string[]; // an array of strings
// favouriteActivities = ["Strings", 1] -> error

console.log(person3.isAWebDev);

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase())
}


