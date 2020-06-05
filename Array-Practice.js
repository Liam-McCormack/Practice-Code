//const cities = ['New York', 'Venice', 'Manchester'];

//console.log(cities[2]);


//const cities = 'New York';
//console.log(cities[2]);



/* let favPlaces = ['Manchester', 'Valley', 'Seaside'];
let wetPlaces = favPlaces[2];
console.log(wetPlaces); */


/* ARRAYS AND FUNCTIONS
const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

(arr) is whatever, it will be replaced by which ever variable we pass into addFlower().
So it becomes (flowers.push('lily);')). */


/* NESTED ARRAYS
const nest = [1, 2, 3, [4, 5]];
console.log(nest[3][1]); //returns 5

const long = ['hello', 'big', 'word'];
console.log(long[1][1]); //returns i 

const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1]; //returns 6 */



/* SECRET MESSAGE PROJECT

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push('to', 'Program'); 

secretMessage[7] = 'right';

secretMessage.shift();
secretMessage.unshift('Programming');

secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' ')); */
