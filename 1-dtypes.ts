// Basic Data Types
// - primitive types (number, string, boolean)
// - arrays
// - tuples
// - enums
// - Any, Unknown, Void, Null, Undefined, Never

// primitives and reference
// [] {} () - reference, changes made using these -> change in parent

var num1 = 12; //primitive
var arr = [12, 24, 36]; //reference

// Arrays
let vals = [1, 2, 3]; // hover over vals and you'll see the type inferred, here the type is 'number[]' (array of numbers)
let vals2 = [1, 2, 3, "manash"]; // types - string or number (string | number)

// if you want array of just numbers?
let nums: number[] = [1, 2, 3, 4];

// Tuples
let myArr: [string, number] = ["manash", 100]; // fixed! the first has to be string and second has to be a number and no item more
let myArr2: [number, string] = [100, "manash"];

// Enums - we can create many properties in enums and use them
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin",
}
// for example you can use it like `UserRoles.ADMIN`

// Any, Unknown, Void, Null, Undefined, Never

// any - like typescript switches off
let a; // hover and look at the type of a - it will be `any`
let b = 12; // here type - number!

// any example
let data: any;
data = 12;
data = "typo";

data.toUpperCase(); // this is doable when using `any`

//unknown examples
let value: unknown;
value = 12;
value = "Huh!";

value.toUpperCase(); // this is not doable when using `unknown`

// for it to work, we'll need to do type narrowing
if (typeof value === "string") {
  value.toUpperCase();
}

// void - when function isn't returning anything
function abcd(): void {
  console.log("Hi"); // function isn't returning anything
}
