/*
//OBJECTS
let spaceship = {
    'Fuel Type': 'diesel',
    color: 'silver'
};

let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
  }; 
*/
  

/* 
//ACCESSING WITH DOT NOTATION (.) AND BRAKET NOTATION ([])
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn'],
    '!@#$%^&*().': 'joystick'
  };
  
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath; 
let shuttleControl = spaceship['!@#$%^&*().'];

console.log(crewCount);
console.log(shuttleControl); */



/*
//USING VARIABLE IN BRACKET NOTATION FOR OBJECT AND FUNCTIONS.
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';
let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);


function object(objectName, propName) {
    console.log(objectName[propName])
};
object(spaceship, 'homePlanet'); */



/*
//PROPERTY ASSIGNMENT IN OBJECTS
let object = {
    'object color': 'red',
    size: '',
    'object length': 'long'
};

object['object color'] = 'blue'; //changed value
object.size = 'huge'; //added value to an empty value
object.speed = 'fast'; //added new key-value pair to object
delete object['object length']; //deleted property from object

console.log(object); */


/*
//OBJECT WITH A FUNCTION IS A METHOD
let object = {
    'object color': 'red',
    size: '',
    'object length': 'long',
    'object descrip' () {
        console.log(`The object is ${object["object color"]}, it is very ${this['object length']} and it is quite ${object.size}`);
    } //Here 'this['object length']' refers to the current object's name property
};

object.size = 'tall'
object['object descrip'](); */


/* 
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff(); */


/*
//NESTED OBJECTS
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceship.crew.captain['favorite foods'][0];
  
  spaceship.passengers = [{name: 'Liam'}, {name: 'Tanya'}];
  
  let firstPassenger = spaceship.passengers[0];
  let secondPassenger = spaceship.passengers[1];
  
  console.log(firstPassenger); */


/*
//PASS BY REFERENCE - Can reassign a property but not the object
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  
  // Write your code below
  let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
  };
  
  let remotelyDisable = obj => {
    obj.disabled = true;
  };
  
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  
  console.log(spaceship); */
  

/*
//LOOPING THROUGH OBJECTS
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
/* for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}; */





/*
//ADVANCED OBJECTS - THIS KEYWORD
let person = {
  name: 'Liam',
  age: 25,
  sex: 'Male',
  personDetails() {
    console.log(`This is ${this.name}, he is ${this.age} and he is ${this.sex}.`);
  },
  otherDetails() {
      console.log(this.name);
    }
}
person.otherDetails(); 


//THIS KEYWORD, SCOPE APPLIED
let person = {
  name: 'Liam',
  age: 25,
  sex: 'Male',
  personDetails() {
    console.log(`This is ${this.name}, he is ${this.age} and he is ${this.sex}.`);
  },
  otherDeets: {
    name: 'Tanya',
    otherDetails() {
      console.log(this.name);
    }
  } 
}
person.personDetails();//Prints the console.log
person.otherDeets.otherDetails(); //Prints Tanya, not Liam - THIS calls on 'otherDeets'. */


/*
//PRIVACY - GETTER AND SETTER METHODS
//GETTER
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel);

//SETTER
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      return this._numOfSensors = num;
    } else {
      return 'Pass in a number that is greater than or equal to 0';
    }
  }
};

robot.numOfSensors = 100;
console.log(robot._numOfSensors); */


/*
let client = {
  _firstName: 'Liam',
  _lastName: 'McCormack',
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  },
  set fullName(name) {
    if (typeof name === 'string') {
      return [this._firstName, this._lastName] = name.split(' ');
    } else {
      console.log('Please enter a valid name');
    }
  }
};
console.log(client.fullName)//Logs Liam McCormack
client.fullName = 'Tanya Eccleston';//Tanya 'set' to firstName, Eccleston to lastName
console.log(client.fullName);//'Gets' the property, which has been mutated by 'set'. Prints Tanya Eccleston */


/*
const monsterFactory = (name, age, type, height) => {
  return {
    Name: name,
    Age: age,
    Type: type,
    Height: height
  }
};
const squirtle = monsterFactory('Squirtle', 4, 'Water', '4ft');
console.log(squirtle);

function pokemon(name, age, type, height) {
  return {
    Name: name,
    Age: age,
    Type: type,
    Height: height
  }
};
const pikachu = pokemon('Pikachu', 5, 'Electric', '3ft');
console.log(pikachu); */

/*
//DESTRUCTURING TECHNIQUES - PROPERTY VALUE SHORTHAND
function pokemon(name, age, type, height) {
  return {
    name,
    age,
    type,
    height
  }
};
const pikachu = pokemon('Pikachu', 5, 'Electric', '3ft');
console.log(pikachu); */


/*
//DESTRUCTURING TECHNIQUES - DESTRUCTURED ASSIGNMENT
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
let residence = vampire.residence; //NORMAL 
console.log(residence);

let {name} = vampire; //destructured assignment - use of curly braces/property value same as variable
console.log(name);

let {day} = vampire.preferences;//Using technique on NESTED properties
console.log(day); */



/*
//BUILT-IN OBJECT METHODS
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};


const robotKeys = Object.keys(robot);//Adds all the KEYS from robot to robotKeys
console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)//Returns an array with the KEYS and VALUES of an OBJECT
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = {
  laserBlaster: true,
  voiceRecognition: true
}

Object.assign(newRobot, robot)//Assigns the KEYS and VALUES of robot to newRobot - Object.assign(target, source)
console.log(newRobot); */


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
