function sayHello(user) {
  return `Hello ${user}!`;
}

function sayGoodbye(user) {
  return `Goodbye ${user}!`;
}

function greetUser(user, cb) {
  return cb(user);
}

console.log(greetUser('Katy', sayHello));
console.log(greetUser('Katherine', sayGoodbye));
