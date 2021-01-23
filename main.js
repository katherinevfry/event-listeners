// THE DOM = document object model AKA the document AKA the browswer

// const lessons = {
//   1: "document",
//   2: "callbacks",
//   3: "event listeners",
//   4: "bootstrap",
//   5: "Code",
// }

//  Document: JS running on a webpage has access to a global object called "document"
// DOM stands for DOCUMENT OBJECT MODEL the document object contains our DOM and prototype methods that allow us to access elements on the DOM and manipulate them
//we are going to look at two different selectors

//document.getElementById

const button = document.getElementById('main-btn');

console.log(button);

//Query slectors can target classes OR IDs and they only return the first thing

const getButton = document.querySelector('#main-btn');

console.log(getButton);

//CALLBACKS

// the ability to pass a function as an argument to another funtion
//convention is to use the 'cb' argument variable as your callback

// function saysHelloToUser(user) {
//   return `Hello ${user}!`;
// }

// function saysGoodbyeToUser(user) {
//   return `Goodbye ${user}!`;
// }

// function createGreeting(user, cb) {
//   return cb(user);
// }

// const greet = createGreeting('Katy', sayHelloToUser);

// console.log(greet);
