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
