console.log('hello world')

// . dot, period  (use dot in terminal current working dir. \ use with objects for dot notation, how to access it \)
// (), parens, used for functions, parameters, if logic and used to define order of operations \
// [], brackets or square brackets, square braces \ used for arrays typically \
// {}, curly braces, curlies, curly brackes \ used for functions, objects 
// <, less than, bird, angle brackets
// >, greater than, gator, angle brackets
// /, forward slash, slash, whack \ used for comments and division 
// \, backslash, escape character, doesn't use as much except on PC, can be used for escape character, like for ticks, be apart of the string \
console.log('There\'s');
// !, esclamation, bang, not
// #, pound, hash, number, octothorpe 
// *, star, asterisk, splat, times (multiplication) \ 
// $, bling, dollar sign, cash \ used with template literals \ in jquery, manipulating the DOM
// ||, pipes, or
// &&, double ampersand, and 
// NaN, not a number, bread
// =, assignment operator
// ===, equivalence (strict)
// !==, not equal

// data types *****

// number = 18
// string = 'taco', '18'
// boolean = true, false
// undefined: seen when you declared a variable but given no values
// null: empty on purpose
// array: made with [], contain any data type 
// object: made with {}, contains key valiue pairs
// NaN: made with adding something funky, 'ten' + 10

// Variables *****

let x = 1; // expression 
let y = 3; // expression
y = y + 1; // expression 
const isAwesome = true;


// have variable x, assigning a value, value is 1
// can use const, if never re-assigning 
// assign variables using camelCased
// SCREAMING_SNAKE_CASE 
// kebab-case
// variables named using nouns
// functions named using verbs
// expression: anything that evaluates to a single value 

'1' + 2 === '12';
'10' - 5 === 5;
'36' / 6 === 6;
'ten' + 3 === NaN;

// + converts a number to a string to concatenate
// other operators convert string to a number, if possible

// Conditionals *****
/*
if ( expression is truth ){
} else {
    // perform some other logic
}
*/

// Operators *****

// ==, equal in value, coerces to types to be comparable 
// ===, equal in value and data-type

if (3 !== 5) {
    console.log('Duh, no');
}

// <= , less than or equal
// >= , greater than or equal 

// Loops ****

// while loop: runs until a logical condition is met, while it is true
/*
while (expression is truth){
    // perform some logic 
    // run while condition is true
} 

for (let i = 0; i < 3; i++){
    // perform logic
    // i can be used in here if we want - it's a number
    // run a set number of times 
    // inside parens in loop interation 
}

*/

const hats = ['stocking', 'baseball', 'fedora', 'top-hat'];

for (let hat of hats) {
    // each hat is item in hats array
    console.log(`I'm wearing a ${hat}!`);
    console.log('I am wearing a ', hats[3]);
}

// Functions *****

// blocks of objects to run whenever we want, call functions
// encapsulation: each function should contain all logic it needs to run
// often take in input and has output

/*
function doubleIt(x){
    // x is argument/parameter
    return x * 2;
    // return exists function with a value
}
// function declaration


let secret = doubleIt(123);
let superSecret = doubleIt(secret);


let doubleIt = function(x){
    return x + 2;
}
// must be defined before used
// value anonmyous function

*/

// Number() turns number is string?
// parseFloat() takes an argument turns into a string, returns a floating point number (number with decimals)
// parseInt() , returns an integer
// String() input into a string object

// object methods, toString() , change part of an object into a string

// string methods, chartAt(3), returns character 3rd of string 
// .substring() , return part of a string

// array methods 
// .push(), .pop(), .shift(), .unshift()


let str = 'a,b,c,d,e';
let arr = str.split(',');
// covert string to an array
console.log('arr is ', str);
console.log('arr is ', arr);











