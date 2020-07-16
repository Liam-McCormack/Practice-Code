

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






//USING A CONDITIONAL IN A RENDER FUNCTION
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>
    }
  }
}

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')
);

//another example
import React from 'react';
import ReactDOM from 'react-dom';

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }

    return <h1>Today I am going to {task}!</h1>;
  }
}

ReactDOM.render(
	<TodaysPlan />,
	document.getElementById('app')
);






//THIS KEYWORD IN A REACT COMPONENT
import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name() { 
    return 'Liam';
  }
  render() {
    return <h1>My name is {this.name}.</h1>; //Don't need to include parentheses with 'this.name' as it is a Getter.
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));







//EVENT LISTENERS IN COMPONENTS - we define event handlers as methods on a component class.
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  warning() {
    alert('This is a warning to not click here!');
  }

  render() {
    return ( //dont forget these parentheses!
    <button 
    onMouseOver={this.warning}
    onClick={this.scream}>AAAAAH!</button>
    );
  }
}

ReactDOM.render(
  <Button/>,
  document.getElementById('app')
);