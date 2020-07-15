/*
//USING THE ASYNC KEYWORD
function withConstructor(num){
    return new Promise((resolve, reject) => {
      if (num === 0){
        resolve('zero');
      } else {
        resolve('not zero');
      }
    })
  }

//above function rewritten as an async function 
async function withAsync(num) {
    if (num === 0) {
        return 'zero';
    } else {
        return 'not zero';
    }
};

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});
*/

/*
//MAKING USE OF THE 'AWAIT' OPERATOR
//original promise function
function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    })
}
  
  
// async/await version:
async function announceDinner() {
    let meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`); 
};

announceDinner();
*/



/*
//USING ASYNC..AWAIT FOR DEPENDANT PROMISES CHAIN - BETTER THAN CHAINING .THEN() PROMISES
async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}

asyncAwaitVersion();



const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');
// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  console.log(type);
  let isSoft = await soakTheBeans(type)
  console.log(isSoft);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
};

makeBeans();
*/



/*
//HANDLING ERRORS
async function usingTryCatch() {
  try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // Catches any errors in the try block
    console.log(err);
  }
};
 
usingTryCatch();


//HANDLING ERRORS - CAN STILL USE NATIVE PROMISE'S .CATCH() WITH AN ASYNC FUNCTION
async function usingPromiseCatch() {
  let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => {
console.log(rejectValue);
});



const cookBeanSouffle = require('./library.js');
// Write your code below:
async function hostDinnerParty() {
  try {
    let resolved = await cookBeanSouffle();
    console.log(`${resolved} is served!`);
  } catch (error) {
    console.log(error)
    console.log(`Ordering a pizza!`);
  }
};

hostDinnerParty();
*/


/*
//HANDLING INDEPENDANT PROMISES 
//Taking advantage of concurrency (happening at the same time). Both promises’ asynchronous operations can be run simultaneously.
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
};

serveDinner();
*/


//AWAIT PROMISE.ALL()
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinner() {
  let vegetablePromise = steamBroccoli();//each promise will execute instantly
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}; //Console.log will await the resolved value of each array promise before executing.

serveDinner();