//TWEAK AN ELEMENT

document.body.innerHTML = 'The cat loves the dog.';
document.body.innerHTML = '<h2>This is a heading</h2>'; //creates a h2 element as a child of body element

//SELECT AND MODIFY ELEMENTS
document.querySelector('p'); //Selects FIRST <p> element
document.getElementById('bio').innerHTML = 'The description'; //assigns the text to the element with id 'bio'

document.querySelector('h1').innerHTML = 'Most popular TV show searches in 2016'
document.getElementById("fourth").innerHTML = 'Fourth element'


//STYLE AN ELEMENT
let blueElement = document.querySelector('.blue');//Assigns variable to element with class of blue
blueElement.style.backgroundColor = 'blue'; //element.style.property format - CSS selector with no hyphen

document.querySelector('.blue').style.fontFamily = 'Roboto';
document.querySelector('body').style.backgroundColor = '#201F2E';


//CREATE AND INSERT ELEMENTS
let paragraph = document.createElement('p'); //creating a new <p> element and assigning it to a variable

paragraph.id = 'info'; //giving the variable and id

paragraph.innerHTML = 'The text inside the paragraph'; //Filling the empty element with text (innerHTML)

document.body.appendChild(paragraph); //appendChild() ADDS the argument as a child element to the document.target

let newDestination = document.createElement('li');
newDestination.id = 'oaxaca';
newDestination.innerHTML = 'Oaxaca, Mexico';
document.getElementById('more-destinations').appendChild(newDestination)


//REMOVE AN ELEMENT
let paragraph = document.querySelector('p'); //Returns FIRST element (this case <p>)
document.body.removeChild(paragraph); //Would REMOVE the first <p>

document.getElementById('sign').hidden = true; //Hid element, DID NOT remove it from the DOM. NOT the same as CSS visibility: hidden!

let newVar = document.getElementById('oaxaca');
document.getElementById('more-destinations').removeChild(newVar); //Removing 'oaxaca' from the #more-destinations element

document.getElementById('sign').hidden = true; //Hides an element with .hidden (needs to be assigned TRUE or FALSE)



//TRAVERSING THE DOM - ACCESSING PARENT AND CHILD NODES
let first = document.body.firstChild; //Declaring a variable that holds the FIRST child node of the <body> element

first.innerHTML = 'I am the child!'; //Changing the inner HTML of the variable - or the first child element of <body>

first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!'; //Changing the inner HTML of the parent node of the first child node, the <body>