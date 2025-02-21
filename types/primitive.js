//In JavaScript everthing is an Object - false

//primitive types in JS
/* 
undefined
string
number
boolean
object
symbol
*/

//In JS variables dont have types values do

let v;
typeof v; //undefined
v = "1";
typeof v; //string
v = 2;
typeof v; //number
v = true;
typeof v; //boolean
v = {};
typeof v; //object
v = Symbol();
typeof v; //symbol

//typeof always returns a string and its always from a group of 6 values like an enum

typeof doesnotexists; //undefined

let k = null;
typeof k; //object

k = function () {};
typeof k; //function

k = [1, 2, 3];
typeof k; //object

//undefined vs undeclared uninitialized(TDZ)

//NaN is only type which is not equal to itself

//NaN means Invalid Number and type of Invalid number is number

//so type of NaN is number

//Negative Zero ......

//Object.is() method is used to compare if two values are the same value

//Object.is() does not coerce values before comparison even if they are of different data types
