/* 
//PART ONE
const Jedi = {}

Jedi.knight = 'Anakin Skywalker';
Jedi.master = 'Obi-Wan Kenobi';
module.exports = Jedi; 

//PART TWO
module.exports = {
    knight: 'Anakin Skywalker',
    master: 'Obi-Wan Kenobi',
    saying: function() {
        return 'I am one with the Force.';
    }
}; 
*/


/*
//USING 'EXPORT DEFAULT' RATHER THAN 'MODULE.EXPORTS' (NOT SUPPORTED BY NODE.JS)
const Airplane = {
    availableAirplanes: [{
      name: 'AeroJet',
      fuelCapacity: 800
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500
    }]
  };
  
  export default Airplane;
  */


/* 
//EXPORT & IMPORT ON ES6 - WONT WORK ON NODE - EXPORT SIDE
const Airplane = {
availableAirplanes: [{
    name: 'AeroJet',
    fuelCapacity: 800
    },
{
    name: 'SkyJet',
    fuelCapacity: 500
    }]
};

export default Airplane;
*/


/*
//EXPORTING NAMED EXPORTS WITH ES6
let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export {availableAirplanes, flightRequirements, meetsStaffRequirements};
*/


/*
//IMPORTING NAMED VARIABLES AND USING THEM IN IMPORT FILE FUNCTIONS.
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach((element) => {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  })
};

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(`${element.name} meets staff requirements: ${meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff)}`)
  })
}

displayStaffStatus(); 
*/


/*
//EXPORT NAMED EXPORTS - EXPORT VARIABLES AS SOON AS THEY ARE DECLARED
export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
},
{
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
}];

export let flightRequirements = {
requiredStaff: 4,
requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
if (availableStaff.length >= requiredStaff) {
  return true;
} else {
  return false;
}
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
let range = maxSpeed - minSpeed;
if (range > requiredSpeedRange) {
  return true;
} else {
  return false;
}
};
*/


//EXPORTING VARIABLES TO BE CONVERTED INTO NEW NAMES - PART FOUR
/*
let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
},
{
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
}];

let flightRequirements = {
requiredStaff: 4,
requiredSpeedRange: 700
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
if (availableStaff.length >= requiredStaff) {
  return true;
} else {
  return false;
}
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
let range = maxSpeed - minSpeed;
if (range > requiredSpeedRange) {
  return true;
} else {
  return false;
}
};

export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedReqs };
*/



/*
//COMBINING EXPORT STATEMENTS - ALL DO THE SAME THING BUT WE CAN COMBINE - PART FIVE
export let availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
},
{
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
}];

export let flightRequirements = {
requiredStaff: 4,
requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
if (availableStaff.length >= requiredStaff) {
  return true;
} else {
  return false;
}
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
let range = maxSpeed - minSpeed;
if (range > requiredSpeedRange) {
  return true;
} else {
  return false;
}
};

export default meetsSpeedRangeRequirements; //meetsSpeedRangeReq is exported differently
*/