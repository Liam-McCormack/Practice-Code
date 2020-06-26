/*
//CONSTRUCTING AN ERROR - USING ERROR FUNCTION
//console.log(Error('Your password is too weak.'));


//THROWING AN ERROR AND HALTING THE PROGRAM
console.log('This line will print.');
throw Error('This code is too spicy.');
console.log('This line will not print.');
*/


/*
//THE TRY...CATCH STATEMENT
console.log('This line will print.');
try {
    throw Error('This code is too spicy.');
} catch (e) {
    console.log(e)
};
console.log('This line will also print now.');
*/

//HANDLING WITH TRY...CATCH - ALLOWS PROGRAM TO STILL RUN
function capAllElements(arr){
        try {
        arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase();
    });
    } catch (e) {
        console.log(e);
    }
}

capAllElements('Incorrect argument');