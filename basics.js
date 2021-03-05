"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person3 = {
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
person3.role.push("admin");
console.log(person3.role);
let favouriteActivities; // an array of strings
// favouriteActivities = ["Strings", 1] -> error
console.log(person3.isAWebDev);
for (const hobby of person3.hobbies) {
    console.log(hobby.toUpperCase());
}
