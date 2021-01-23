//event listeners are a function that fires when an event occurs on the DOM (a click, a mouse entering the content area, an image finishing download)

//let's focus on "click"
//event listeners should go at the top of a JS file

const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (event) => {
//   console.log(`You clicked ${event.target.id}!`);
//   // console.log(event);
// })

const whatIsTheId = (event) => {
  console.log(`You clicked ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON'; //innerHTML adds html inside the container. it will replace any HTML that is already in that container AKA reassigns it
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }
}

button.addEventListener('click', whatIsTheId);

const button2 = document.querySelector('#other-btn');

button2.addEventListener('click', whatIsTheId); //you can hardcode a function OR pass in a callback
