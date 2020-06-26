

//EVENT HANDLER REGISTRATION
let readMore = document.getElementById('read-more')
let moreInfo = document.getElementById('more-info')

readMore.onclick = function() {
  moreInfo.style.display = 'block';
}

//OPENING A 'VIEW' BUTTON, CHANGING THE TEXT ON CLICK, THEN RETURNING TO NORMAL ON 'CLOSE'
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.onclick = open;
close.onclick = hide;

// Write your code here
textChange = () => {
  view.innerHTML = 'Hello, World!'
}

textReturn = () => {
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange); //Waits for a 'click' event on that element then runs the event handler function
close.addEventListener('click', textReturn);



//SHARING PHOTO AND DISPLAYING TIME STAMP PROPERTY ON EVENT
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = event.timeStamp
}

share.addEventListener('click', sharePhoto);




//CHANGE COLOURS
// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}

button.onclick = colorChange;

mysteryButton.onwheel = colorChange; //Changes colour based on mouse wheel scroll


//MOUSE EVENTS
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write code for the first list item
itemOne.onmouseover = function() {
  itemOne.style.width = '500px';
}

// Write code for the second list item
itemTwo.onmouseup = function () {
  itemTwo.style.backgroundColor = 'orange';
}

// Write code for the third list item
itemThree.onmouseout = function () {
  itemThree.innerHTML = 'The mouse has left the element.';
}

// Write code for the fourth list item
itemFour.onmousedown = function () {
  itemFive.style.display = 'block';
}


//KEYBOARD EVENTS
