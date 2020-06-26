
/* //PART ONE
const Jedi = require('./Modules');

function jediOrder() {
    console.log(`Two members of the Jedi Order are ${Jedi.master} and ${Jedi.knight}.`);
} 
//Calling the Object properties from a seperate file

jediOrder(); */


/*
//PART TWO
const Jedi = require('./Modules');

console.log(Jedi.knight);
console.log(Jedi.master);
console.log(Jedi.saying()); //Calling function from seperate file
*/


/*
//EXPORT & IMPORT ON ES6 - WONT WORK ON NODE - IMPORT SIDE
import Airplane from './Modules';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach((element) => {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  })
};

displayFuelCapacity();
*/



/*
//USING IMPORTED NAMED IMPORTS - PART FOUR
import {availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements} from './airplane';

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

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
     console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();
*/



/*
//IMPORTING VARIABLES THAT HAVE HAD THEIR NAMES CONVERTED IN EXPORT - PART FOUR
import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach((element) => {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  })
};

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
    console.log(`${element.name} meets staff requirements: ${meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff)}`)
  })
}

displayStaffStatus(); 

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
     console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();
*/



/*
//COMBINING IMPORT STATEMENTS - PART FIVE
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

import meetsSpeedRangeRequirements from './airplane'; //Two combined import statements

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

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
     console.log(element.name + 'meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();
*/