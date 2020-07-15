

//A REACT COMPONENT EXAMPLE
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
);



import React from 'react'; //creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement() and React.Component.

import ReactDOM from 'react-dom'; //creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.render().

class MyComponentClass extends React.Component {
    render() { //Component classes ALWAYS needs a render() method.
      return <h1>Hello world</h1>; //usually return a JSX expression.
    }
}; //by subclassing React.Component, you create a new component class. This is not a component! A component class is more like a factory that produces components. Use UpperCamelCasing.


<MyComponentClass /> //instance of the component class written as a JSX element. We give it the SAME NAME as the class.

ReactDOM.render(
	<MyComponentClass />, 
	document.getElementById('app')
); //calls the instance which returns the JSX Element and renders it to the HTML element in the second argument.







//MULTI-LINE JSX EXPRESSION IN REACT EXAMPLE - mult-line JSX expressions need to be enclosed in parentheses.
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return (
    <blockquote>
      <p>
        What is important now is to recover our senses.
      </p>
      <cite>
        <a target="_blank" 
          href="https://en.wikipedia.org/wiki/Susan_Sontag">
          Susan Sontag
        </a>
      </cite>
    </blockquote>
    )
  }  
};


//ANOTHER EXAMPLE
import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {owl.title}
        </h1>
        <img
          src={owl.src}
          alt={owl.title}
        />
      </div>
    )
  }
};

ReactDOM.render(
  <Owl/>,
  document.getElementById('app')
);





//LOGIC IN A RENDER FUNCTION
import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    const i = Math.floor(Math.random() * 3);
    const friend = friends[i];
    return (
      <div>
        <h1>
          {friend.title}
        </h1>
        <img
          src={friend.src}
        />
      </div>
    );
  }
};

ReactDOM.render(
  <Friend/>,
  document.getElementById('app')
);