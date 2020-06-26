/*
//Object we're basing our promise off
const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
//Executor function is created
function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.')
    } else {
        reject('That item is sold out.')
    }
}

//Method containing our Promise - Executor function is passed into the Promise constructor method
function orderSunglasses() {
    return new Promise(myExecutor);
}

const orderPromise = orderSunglasses(); //Method containing Promise is saved as a variable

console.log(orderPromise); //Variable with Promise printed - either RESOLVES or REJECTS
*/


/*
//USING NODE'S SETTIMEOUT() METHOD
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
function usingSTO() {
  console.log('Hiyah')
};

setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
*/


/*
//USING HANDLERS (FUNCTIONS) FOR RESOLVED AND REJECTED PROMISES
const myPromise = new Promise((resolve, reject) => {
    const number = 150
    if (number > 250) {
        resolve('I resolved!');
    } else {
        reject('I rejected.');
    };
});

function handleSuccess(resolvedValue) {
    console.log(resolvedValue);
};

const handleFailure = rejectedValue => {
    console.log(rejectedValue);
};

//myPromise.then(handleSuccess, handleFailure);
myPromise
    .then(handleSuccess)
    .catch(handleFailure);



let prom = new Promise((resolve, reject) => {
let num = Math.random();
    if (num < .5 ){
        resolve('Yay!');
    } else {
        reject('Ohhh noooo!');
    }
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);
*/

/*
//USING CATCH() WITH PROMISES (First code won't run, just for reference)
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];
 
const handleSuccess = (resolvedValue) => {
   console.log(resolvedValue);
};
 
const handleFailure = (rejectReason) => {
   console.log(rejectReason);
};
 
checkInventory(order)
    .then(handleSuccess)
    .catch(handleFailure);

////////////////////////////////////////////////////////
const myPromise = new Promise((resolve, reject) => {
    const number = 150
    if (number > 250) {
        resolve('I resolved!');
    } else {
        reject('I rejected.');
    };
});

function handleSuccess(resolvedValue) {
    console.log(resolvedValue);
};

const handleFailure = rejectedValue => {
    console.log(rejectedValue);
};

myPromise
    .then(handleSuccess)
    .catch(handleFailure);
*/

/*
//CHAINING MULTIPLE PROMISES - (Code won't run, just for reference)
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
*/

/*
//AVOIDING COMMON MISTAKES WITH PROMISE COMPOSITION
//incorrect and messy code 
checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
            .then((resolvedValueArray) => {
                shipOrder(resolvedValueArray)
                    .then((successMessage) => {
                        console.log(successMessage);
                    });
            });
    });

//Refactored, cleaner code
checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray)
    })
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray)
    })
    .then((successMessage) => {
        console.log(successMessage);
    });
*/


//USING PROMISE.ALL() - (Code won't run, just for reference)
const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};


const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject)