const pies = [
  {
    name: 'Dutch Apple Pie',
    ingredients: 'apples,sugar,butter,nutmeg,dutch people',
    bakeTemp: 5000,
    drinkPairing: 'Earl Grey Tea',
    imageUrl:
      'https://images-gmi-pmc.edge-generalmills.com/b6a2a4e7-73f5-4aec-9bb6-f2b5054d65e6.jpg',
    instructor: 'Doc',
    iceCream: 'Vanilla',
  },
  {
    name: 'Berry Pie',
    ingredients: 'berries',
    bakeTemp: 400,
    drinkPairing: 'wine',
    imageUrl:
      'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
    instructor: 'Doc',
    iceCream: 'banana',
  },
  {
    name: 'Pumpkin Pie',
    ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
    bakeTemp: 42,
    drinkPairing: 'egg nog',
    imageUrl:
      'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
    instructor: 'Aja',
    iceCream: 'Vanilla',
  },
  {
    name: 'Shoo Fly Pie',
    ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
    bakeTemp: 1234,
    drinkPairing: 'Apple Cider',
    imageUrl:
      'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructor: 'Aja',
    iceCream: 'Coffee',
  },
  {
    name: 'Pecan Pie',
    ingredients: 'Pecans, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Milk',
    imageUrl:
      'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
    instructor: 'Trinity',
    iceCream: 'Vanilla',
  },
  {
    name: 'Keylime Pie',
    ingredients: 'lemons, sugar, butter, flour',
    bakeTemp: 5000,
    drinkPairing: 'Water',
    imageUrl:
      'https://www.browneyedbaker.com/wp-content/uploads/2012/05/key-lime-pie-2-1200.jpg',
    instructor: 'Trinity',
    iceCream: 'none',
  },
];

// let filtered = false;
// const selectedPies = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId); 
  selectedDiv.innerHTML = textToPrint;
} //this is a great function to use over and over again it selects what on the page you want to manipulate (divID) and declares what you're going to do to that element (in this case, innerHTML and text to print, which you'll generate in the next function)

const pieBuilder = (taco) => {
  let domString = ''; //this is an empty string that 
   taco.forEach((item, i) => {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
    <div class="img-container" style="background-image: url('${item.imageUrl}');"></div>
    <div class="card-body">
      <p class="card-text">${item.name}</p>
      <p class="card-text">${item.ingredients}</p>
      <p class="card-text">${item.bakeTemp}</p>
      <p class="card-text">${item.drinkPairing}</p>
      <p class="card-text">${item.iceCream}</p>
      <button type="button" class="btn btn-danger" id="${i}">Delete</button>
    </div>
  </div>`;
})
printToDom ('#pies', domString) //this calls the first function with the arguments (divId, texToPrint)
}

const handleButtonClick = (e) => { //the add event listener creates an event on the dom which is why you always have access to e (the event)
const buttonId = e.target.id;

if (buttonId === 'Trinity') {
  //DARK MODE
  document.querySelector('body').style.backgroundColor = '#000';
} else if (buttonId === 'Doc') {
  //light mode
  document.querySelector('body').style.backgroundColor = '#FFF';
} else if (buttonId === 'Aja'){
  //medium mode
  document.querySelector('body').style.backgroundColor = '#808080';
} else if (buttonId === 'All') {
  //default mode
  document.querySelector('Body').style.backgroundColor = 'rgb(175, 196, 175)';
}

//UPDATE THE PIES BASED ON BUTTON CLICKED

for (let i = 0; i < pies.length; i++) {
  if(pies[i].instructor === buttonId) {
    selectedPies.push(pies[i]);
  }
}

if (buttonId === 'All') {
  filtered = false;
  pieBuilder(pies);
} else {
  filtered = true;
  pieBuilder(selectedPies);
}

console.log(filtered);

}
//C in CRUD = CREATE (new pies)
const getFormInfo = (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value
    const ingredients = document.querySelector('#ingredients').value
    const bakeTemp = document.querySelector('#bakeTemp').value
    const drinkPairing = document.querySelector('#drinkPairing').value
    const imageUrl = document.querySelector('#imageUrl').value
    const instructor = document.querySelector('#instructor').value
    const iceCream = document.querySelector('#iceCream').value 
  
    //shorthand object notation to add values to obj
  const obj = {
    name,
    bakeTemp,
    ingredients,
    drinkPairing,
    imageUrl,
    instructor,
    iceCream,
  }

  //pushing new object up to the pies array
  pies.push(obj);
  
  //rebuilding the DOM (update data, then update the DOM. you want the most recent data)
  pieBuilder(pies);

  //resets form after submit
  document.querySelector('form').reset();
}
// D in CRUD :delete the pies

const deletePie = (e) => {
    const targetType = e.target.type;
    const targetId = e.target.id;
    
    if (targetType === 'button') {
    pies.splice(targetId, 1);
    } 
    pieBuilder(pies);
    
    document.querySelector('form').addEventListener('submit', getFormInfo);
}
//Keep this JUST the clicks

const buttonEvents = () => {
document.querySelector('#All').addEventListener('click', handleButtonClick); //this is called chaining. you don't need to declare a variable
document.querySelector('#Doc').addEventListener('click', handleButtonClick);
document.querySelector('#Aja').addEventListener('click', handleButtonClick);
document.querySelector('#Trinity').addEventListener('click', handleButtonClick);
document.querySelector('#pies').addEventListener('click', deletePie);

}

//callback functions are only triggered when the event listener happens. This keeps them from executing on app load


const init = () => {
  pieBuilder(pies); //this function calls the pie function
  buttonEvents();
}

init(); //this calls the initializing function

//it's a good idea to put things in functions so you can make them run when you want them to run
console.log(pies)
