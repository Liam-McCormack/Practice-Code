/*
//REVERSED ARRAY
function reverseArray(arr) {
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed
};


const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence));


//GREETING FOR EACH ARRAY
function greetAliens(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
    }
  };
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  greetAliens(aliens);



//ADD STRING TO NEW ARRAY
function convertToBaby(arr) {
    let babies = []
    for (let i = 0; i < arr.length; i++) {
        babies.push(`baby ${arr[i]}`)
      }
      return babies;
  };

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
console.log(convertToBaby(animals)) 





//FIX BROKEN CODE - SCOPE
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1; //variable was 'i' - 'i' in the while loop and 'i in the FOR loop were overwriting each other.
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
};
console.log(smallestPowerOfTwo(numbers)); */



/*
//DECLINE/ACCEPT FUNCTIONS - FOR.EACH METHOD
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
function declineEverything(arr) {
  arr.forEach(politelyDecline);
};

declineEverything(veggies);

const acceptVeg = (veg) => {
      console.log(`Ok, I guess I will eat some ${veg}.`);
}

function acceptEverything(arr) {
  arr.forEach(acceptVeg);
};

acceptEverything(veggies); */



/*
//USING .MAP() METHOD TO RETURN SQUARED NUM ARRAY
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

function squareNums(arr) {
    return arr.map(toSquare);//.map ONLY takes a callback function as a argument
  }

console.log(squareNums(numbers)) */




/*
//UPPERCASE AND RETURN A NEW ARRAY
function bigHello(str) {
  return `${str}!`.toUpperCase();//CALLBACK FUNCTION
}

function shoutGreetings(arr) {
  return arr.map(bigHello)//.map ONLY takes a callback function as a argument
};
  


// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ] */



/*
//.SORT METHOD TO RETURN AN ARRAY IN DESCENDING ORDER
function sortYears(arr) {
  return arr.sort(function(a,b) {
    return a < b;
  });
};

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ] */




/*
//FILTER TWO ARRAYS WITH .FILTER() METHOD
function justCoolStuff(arr1, arr2) {
    return arr1.filter(word => {
      return arr2.includes(word)
    })
  }; 


const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ] */




/*
//ITERATES THROUGH ARRAY OF OBJECTS, CHECKS IT SATISFYS CONDITION IN .EVERY METHOD() (IS EVERY VALUE TRUE)
function isTheDinnerVegan(arr) {
  return arr.every(meal => {
    return meal.source === 'plant'
  })
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false */



/*
//SORT BY NUMBER OF TEETH ASCENDING ORDER WITH .SORT() METHOD
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
function sortSpeciesByTeeth(arr) {
  return arr.sort((animal1, animal2) => {
    return animal1.numTeeth > animal2.numTeeth
  })
}

console.log(sortSpeciesByTeeth(speciesArray))

/*
// Should print [ { speciesName: 'human', numTeeth: 32 },
  { speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]
*/


/*
//FINDING KEYS IN AN ARRAY WITH .FINDINDEX()METHOD
function findMyKeys(arr) {
  return arr.findIndex(word => {
    return word === 'keys'
    })
};

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4 */




function dogFactory(name, breed, weight) {
  return {
    _name: name,
    _breed: breed,
    _weight: weight, 
    get name() {
      return this._name
    },
    set name(nameInput) {
      this._name = nameInput
    },
    get breed() {
      return this._breed
    },
    set breed(breedInput) {
      this._breed = breedInput
    },
    get weight() {
      return this._weight
    },
    set weight(weightInput) {
      this._weight = weightInput
    },
    bark () {
      return 'ruff! ruff!'
    },
    eatTooManyTreats() {
      this._weight++
    }
  }
}