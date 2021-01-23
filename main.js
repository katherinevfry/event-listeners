const firstObj = {};

const user = {
username: 'biz.markie',
password: 'abcd',
lovesJavascript: true,
favoriteNumber: 42,
};

// DOT NOTATION

console.log(user.lovesJavascript); // will log true to the console
console.log(user.username); //expect bizmarkie

// BRACKET NOTATION
// console.log(user['password']); //must be a strong, number, or variable

// console.log(user['favoriteNumber']);

// console.log(user.favoriteNumber);

// ASSIGNING VALUES

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince'; //asignment via dot notation
// newUser['password'] = 'abcdsdfsa'; //asignment via bracket notation
// console.log(newUser);

//METHODS
// you can assign functions as values of an object. they're called methods

const myObject = {
  username: 'Katy',
  sayHello: function () {
    console.log(`${this.username} says hello`) //this = this object. will console log Katy says hello
  },
}
//anonymous functions don't have names
// myObject.username = 'Katherine'; //will now log Katherine says hello
// myObject.sayHello() //you still have to invoke the function with parentheses

//ITERATE OVER AN OBJECT

const userTwo = {
  username: 'Trinity',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

//time to use a for...in loop

for (let key in userTwo) {
  console.log(key); //logs keys
} 

for (let key in userTwo) {
  console.log(userTwo[key]); //logs value
}

//you have to use bracket, NOT dot notation
