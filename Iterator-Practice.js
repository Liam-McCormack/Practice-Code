
/* FUNCTIONS AS DATA
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  console.log(is2p2.name); */




/*HIGHER ORDER FUNCTIONS
const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);


function checkConsistentOutput(func, val) {
  let firstTry = func(val);
  let secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  } else {
    return 'This function returned inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 9)); */



/* FOR.EACH METHOD 
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`)); 

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnut'];

groceries.forEach(function(groceryItem) {
  console.log(`I need to buy ${groceryItem}`);
}); 

console.log(groceries); */



/* .MAP() METHOD
const family = ['Liam', 'Connor', 'Bethany', 'Patrick', 'Kathy'];

const familyNames = family.map(function(family) {
  return (`${family} McCormack`); //makes a NEW array
});
console.log(family);
console.log(familyNames); 

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(function(animals) {
return animals[0] });
console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(function(bigNumbers) {
  return bigNumbers / 100;
});

console.log(bigNumbers);
console.log(smallNumbers); 




//.FILTER() METHOD 
const words = ['Lego', 'Mass', 'Ego', 'Matt', 'Mattress', 'Pool', 'Nick'];

const mWords = words.filter(function(words) {
  return words[0] === 'M';
});

console.log(mWords);
console.log(words);

//FILTER METHOD WITH ARROW NOTATION
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7;
});

console.log(smallNumbers);
console.log(longFavoriteWords); */



/* .FINDINDEX METHOD
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'; //returns 
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
}); 

console.log(foundAnimal); // 7
console.log(startsWithS); // 3  */



/* .REDUCE() METHOD
const letters = ['L', 'I', 'A', 'M'];

const myName = letters.reduce(function(firstLetter, nextLetter) {
  return firstLetter + nextLetter
});
console.log(myName);
console.log(letters);


const monthlyEarnings = [2330, 1450, 321, 3412];
const otherIncome = 100

const totalEarnings = monthlyEarnings.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, otherIncome);

console.log(totalEarnings); 


const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum); */


/* CHOOSING THE RIGHT ITERATORS
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);


// Choose a method that will return a boolean value
nums.some(num => num < 0);
console.log(nums); */