

/* FOR LOOP
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  }; */




  /* LOOPING IN REVERSE
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
} */


/* LOOPING THROGUH ARRAYS
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
} */



/* NESTED LOOPS - REVISE 

const bobsFollowers = ['Fili', 'Dwalin', 'Oin', 'Gloin'];
const tinasFollowers = ['Oin', 'Frodo', 'Gloin'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers); */



/* WHILE LOOP
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = ''
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}; */


/* DO WHILE LOOP
let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString); */



/* DO...WHILE STATEMENT
const cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded); */


/* USING THE BREAK KEYWORD
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (i > 2) {
    break;
    }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.") */


/* WHALE LANGUAGE PROJECT
const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === 'e') {
    resultArray.push(input[i])
  }
  if (input[i] === 'u') {
    resultArray.push(input[i])
  }
}

console.log(resultArray.join('').toUpperCase()); */