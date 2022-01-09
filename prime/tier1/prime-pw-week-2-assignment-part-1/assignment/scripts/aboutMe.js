const firstName = 'Vince'
const lastName = 'Saykao'
let fullName = (firstName +' '+ lastName);

console.log(fullName);

let luckyNumber = 21

console.log(luckyNumber);

console.log('My name is ' + fullName + ', and I think ' + luckyNumber + ' is a winner!')

let adventurous = true
let food = 'pasta'
let pets = 0
let friendsPets = 2
const allowedPets = 100
let mostPets = (pets + friendsPets);
pets = pets += 2

if (adventurous === true) {
  console.log('Adventures are great!');
} else {
  console.log('How about we stay home?');
}

if (luckyNumber === 2 && adventurous === true) {
  console.log('Roll the dice!');
}

if (pets < allowedPets) {
  console.log('I can have more pets!');
} else if (pets === allowedPets){
  console.log('I have enough pets');
} else if (pets > allowedPets) {
  console.log('Oh no, I have too many pets!');
}

// stretch 16
else if (pets > allowedPets) {
  console.log('Oh no, I have too many pets!');
}
else if (mostPets < allowedPets) {
  console.log('Nice');
} else if (mostPets > allowedPets) {
  console.log('Weird');
}

// stretch 17
let allowed;
switch (new Date().getDay()) {
  case 0:
   allowed = 'Oh no, I have too many pets!';
    break;
  case 1:
    allowed = 'I have enough pets';
    break;
  case 2:
    allowed = 'Oh no, I have too many pets!';
}
document.getElementById("allowedpets").innerHTML = "Sorry! " + allowed;

// stretch 18

if (pets && mostPets < allowedPets) {
  console.log('I can have more pets!');
} else if (pets || mostPets === allowedPets){
  console.log('I have enough pets');
} else if (pets && mostPets > allowedPets) {
  console.log('Oh no, I have too many pets!');
}


// REQUIRED FEATURES:
// 1 - Create a variable called `firstName` and assign it the value of your first name

// 2 - Create a second variable called `lastName` and assign it the value of your last name

// 3 - Create a third variable called `fullName`, assign it the value of your first and last name
// (remember, you already have variables for this, can you use those?)

// 4 - Console log the value of `fullName`

// 5 - Create a variable called `luckyNumber` and assign it the value of your lucky number.

// 6 - Console log this sentence, adding in the variables you created above:
// 'My name is (full name), and I think (lucky number) is a winner!'.
// Refer back to the videos if you need help with this one.

// 7 - Create a variable named `adventurous` and set it to a boolean value (true or false)

// 8 - Create a variable named `food`, and set its value to a string of your favorite food

// 9 - Create a variable called `pets` and set it to the value of the number of pets you have

// 10 - Create a variable called `friendsPets` and assign it the value of the number of pets your friend has

// 11 - Add two pets to your `pets` variable

// 12 - Create a constant variable called `allowedPets` and set it to a number value of your choice

// 13 - Create a conditional: if adventurous is true, console log "Adventures are great!",
// if it's not true, console log "How about we stay home?"




// 14 - Create a compound conditional: if luckyNumber is 2 and adventurous is true,
// console log "Roll the dice!"

// 15 - Write a conditional that console logs "I can have more pets!"
//if the value of `pets` is less than the value of `allowedPets`,
// console logs "I have enough pets" if the value of `pets` is equal to the value of `allowedPets`,
// and console logs "Oh no, I have too many pets!"
// if the value of `pets` is greater than the value of `allowedPets`.

// STRETCH GOALS:

// 16 - Make a variable called `mostPets` and a conditional that
// correctly checks the `pets` and `friendsPets` variables, and
// assigns the highest value to `mostPets`. There's several possibilities --
// be sure to think through all the scenarios.
// console.log `mostPets` after the conditional has run.





// 17 - Rewrite question 16 with a `switch` statement. You'll need to do research!



// 18 -- Rewrite question 13 with a `ternary` operator. You'll need to do research!
