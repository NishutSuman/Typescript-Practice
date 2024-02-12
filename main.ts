// ------- BASICS OF TYPEESCRIPT -----------

// Typescript is a superset of javascript.
// Typescript is all about writing javascript in more precise way with a less chance of errors.
// Typescript is all about Type Safety.
// Typescript works on Static Checking. It analyzes the code as we type it.
// Typescript code is converted to JavaScript. Typescript is a developement tool.
// Typescript is a wrapper around javascript for safety check.


// ------------------ TYPES IN TYPESCRIPT ---------------

// 1. The Primitive Type: String, Number and Boolean
// 2. void, any, never
// ALias Type: e.g type User= { name: string, age: number} --------> Here User becaomes a type
// Union Type: Union allows us to handle the type of output when we not sure that which type of output will be there. It is a kind of combination of 2 or 3 different types.
// Tuples: It's a kind of array which follows array structure. It makes sure that all the types are satisfied with proper order too.




//-----------READONLY and ?(optional)-----------
// - readonly allows to read the property only, it doesn't allow us to change the value of the property
// - When we put ? at the end of the property then it becomes optional.
// - We can use & sign to combine multiple types.
// - We can access readonly fields but we can not modify the value.

// ------- PRIVATE(#) VS PUBLIC VS PROTECTED --------------
// - By default all the fields are public in typescript.
// - private can be used in case we don't want the field to be accessible.
// - Pribate property can not be accessed by subclasses.
// - If any of the properties are assigned as "Protected" then it can be accessed by subclasses. But still we can not access it outside of the class or subclass.


// ---------- INTERFACE ------------

// - Interface is a loose structure of class.
// You can reopen interface by adding more properties/fields to it  separately.
// Interface can be extended with other interfaces.


// --------- ABSTRACT CLASSES ----------

//- Abstract classes can not create objects of their own. But they help defining the classes who are inheriting them.


// ------------ GENERIC -----------

//- use of <> and identity