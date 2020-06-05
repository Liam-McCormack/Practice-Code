//SCOPE
var redCity = 'manchester';

{
    var redCity = 'Liverpool';
}

console.log(redCity); 



// SCOPE POLLUTION
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100 


//PRACTICE GOOD SCOPING
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves); //Northern Lights
  } 
  console.log(lightWaves); //Moonlight
};

logVisibleLightWaves(); 