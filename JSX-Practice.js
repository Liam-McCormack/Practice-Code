


//JSX ELEMENTS
const navBar = <nav>I am a nav bar</nav>;

const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
};



//ATTRIBUTES IN JSX
//example - my-attribute-name="my-attribute-value"

const link = <a href="http://www.example.com">Welcome to the Web</a>;

const title = <h1 id="title">Introduction to React.js: Part I</h1>; 

const panda = <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />;





//MULTI-LINE ELEMENTS NEED PARENTHESES
const theExample = (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
);





//JSX OUTER ELEMENTS
//a JSX expression must have exactly one outermost element.
const paragraphs = ( //will work
    <div id="i-am-the-outermost-element">
      <p>I am a paragraph.</p>
      <p>I, too, am a paragraph.</p>
    </div>
);

const paragraphs = ( //will NOT work
    <p>I am a paragraph.</p> 
    <p>I, too, am a paragraph.</p>
);

//can use new React short hand syntax, React.Fragment.
const paragraphs = ( 
    <React.Fragment>
        <p>I am a paragraph.</p> 
        <p>I, too, am a paragraph.</p>
    </React.Fragment>
);
//OR
const paragraphs = ( 
    <>
        <p>I am a paragraph.</p> 
        <p>I, too, am a paragraph.</p>
    </>
);





//REACTDOM.RENDER() LIBRARY METHOD
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));
//first arg = JSX expression, second arg = HTML container/location

const myList = (
    <ul>
      <li>Hello</li>
      <li>My</li>
      <li>Name</li>
      <li>Is</li>
      <li>Liam</li>
    </ul>
  );
  
ReactDOM.render(myList, document.getElementById('app'));






//USING JAVASCRIPT IN JSX EXPRESSIONS - INCLUDE CURLY BRACES
<h1>{2 + 3}</h1>

const firstName = 'Liam';
const secondName = 'McCormack'

ReactDOM.render(
  <h1>{`${firstName} ${secondName}`}</h1>,
  document.getElementById('app')
);
//Prints 'Liam McCormack' in the 'app' container with the h1 attribute.






//VARIABLE ATTRIBS IN JSX
const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
  }; 
  
const panda = (
    <img 
      src={pics.panda} 
      alt="Lazy Panda" />
);
  
const owl = (
    <img 
      src={pics.owl} 
      alt="Unimpressed Owl" />
);
  
const owlCat = (
    <img 
      src={pics.owlCat} 
      alt="Ghastly Abomination" />
); 
//attributes have their own line to help readability.

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

const gooseImg = <img src={goose}/>

ReactDOM.render(gooseImg, document.getElementById('app'));




//EVENT LISTENERS IN JSX
<img onClick={myFunc} /> //Camel-casing for event listeners in JSX, similar to JavaScript rather than HTML.


function myFunc() {
    alert('This is an alert');
};
  
<img onClick={myFunc} />







//JSX CONDITIONALS - CANNOT BE DECLARED INSIDE A JSX EXPRESSION, HAS TO BE OUTSIDE.
let message;

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);



function coinToss() {
    // This function will randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}
  
const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
    doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
let img;
  
// if/else statement begins here:
if (coinToss() === 'heads') {
    img = <img src={pics.kitty} />
  } else {
    img = <img src={pics.doggy} />
};
  
ReactDOM.render(img, document.getElementById('app'));


//with ternary operator - x ? y(truthy) : z(falsy).
const headline = (
    <h1>
      { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
    </h1>
);
//Above, if age is greater than or equal to drinkingAge, 'Buy Drink' will be in the <h1></h1> tags.




function coinToss () {
    // Randomly return either 'heads' or 'tails'.
    return Math.random() < 0.5 ? 'heads' : 'tails';
}
  
const pics = {
    kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
    doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};
  
const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />; //ternary operator
  
ReactDOM.render(
    img, 
    document.getElementById('app')
);




//&& TERNARY OPERATOR
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>} 
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
); //will only show Nacho if '!judgemental' is true - ! = (Not).

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);



//ARRAY IN JSX WITH THE .MAP METHOD
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => //Each item in array replaces 'person'
  <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app')); //Dont forget the <ul> for lists.






//JSX KEYS IN LISTS
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) => //i returns the index of each name also.
  <li key={'person_' + i}>{person}</li> //key will return 'person_i' unique to each name.
);


ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));