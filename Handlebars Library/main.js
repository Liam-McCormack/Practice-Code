const source = document.getElementById('greet').innerHTML; //STEP THREE - Grab the HTML stored in the Handlebars script

const template = Handlebars.compile(source); //STEP FOUR - Handlebars compile to retun a templating function

const context = {
  greeting: 'Hello World!' //STEP FIVE - context object for the template function
};

const compiledHtml = template(context); //STEP SIX - context object passed into template function to return compiled template

const fill = document.getElementById('hello'); //target element

fill.innerHTML = compiledHtml; //STEP SEVEN - Compiled template rendered onto the webpage

/* After running our code, the expression, 
{{greeting}} is replaced with the value of context.greeting in our JavaScript file. 
In other words, compiledHtml will contain 
a string of '<p> Text of the paragraph element </p>'*/