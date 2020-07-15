/*
//XHR GET request boilerplate code
const xhr = new XMLHttpRequest; //creates new object
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json' //JavaScript Object Notation
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}//function handles response

xhr.open('GET', url);//opens request (the url)
xhr.send();//sends object
*/

/*
//QUERY STRINGS
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb='; //query string
const additionalParams = '&topics=' 
//'&' at the start of our string to seperate parameters in the query string
//'=' will join the key 'topics' to a value

const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}
*/


/*
//XHR POST request boilerplate code
const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response
  }
}

xhr.open('POST', url);
xhr.send(data);
*/




/*
//FETCH() GET REQUEST BOILERPLATE
fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json()
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse
  }
);
*/

/*
//FETCH GET REQUEST EXAMPLE
// Information to reach API
const url = 'https://api.datamuse.com/words';
const queryParams = '?sl=';

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'})
  .then(response => {
    if (response.ok) {
      return response.json(); //resolve
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message) //reject
  })
  .then(jsonResponse => { //next .then if resolved
    renderResponse(jsonResponse);
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
*/


/*
//FETCH POST REQUEST EXAMPLE
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'}) //determines that this request is a POST request and what information will be sent to the API
})
.then(response => {
  if (response.ok) { //will execute when the promise returned from fetch() is resolved.
    return response.json(); //this information will be passed on to the next .then() callback function.
  }
  throw new Error('Request failed!');//This error will be raised if we get back some status error.
}, (networkError => {
  console.log(networkError.message); //will execute when the promise returned from fetch() is rejected.
}))
.then(jsonResponse => {
  return jsonResponse; //The purpose of this step is to view the JSON that was returned from the previous .then().
});
*/

/*
//FETCH POST REQUEST EXAMPLE 2
const shortenUrl = () => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination: urlToShorten});

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      apikey: apiKey
    },
    body: data
  })
  .then(response => {
   if (response.ok) {
     return response.json();
   }
   throw new Error('Request failed!'); //if response.ok is falsy
  }, (networkError => {
    console.log(networkError.message); //safeguards against the network returning an error
  }))
};
*/


/*
//ASYNC AWAIT GET REQUEST BOILERPLATE
async function getData() {
  try {
    const response = await fetch('https://api-to-call.com/endpoint'); //Sends request
    if (response.ok) {
      const jsonResponse = await response.json();
      //Code to execute with jsonResponse - handles response if SUCCESSFUL
    }
    throw new Error('Request failed!'); //Handles response if UNSUCCESSFUL
  } catch (error) {
    console.log(error);
  }
}

//ASYNC AWAIT GET REQUEST EXAMPLE
const getSuggestions = async() => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  try {
    const response = await fetch(endpoint, {cache: 'no-cache'}); //Cache to work within the provided browser
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error);
  }
};
*/


/*
//ASYNC POST REQUEST BOILERPLATE
const getData = async() => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200}) //Object info we are posting with request
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse; //Normally, we would want to do more beyond this step of returning jsonResponse.
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
};

//ASYNC AWAIT EXAMPLE
// information to reach API
const apiKey = 'a4e1aa49ccc0467faa04cd4536c17f07';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async() => {
  const urlToShorten = inputField.value
  const data = JSON.stringify({destination: urlToShorten})
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
      }
    })
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error)
  }
};
*/