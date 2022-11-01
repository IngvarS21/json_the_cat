const cmdLineArg = process.argv.slice(2);
const request = require('request');
  
request('https://api.thecatapi.com/v1/breeds/search', (error, response, body) => {
    
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`${cmdLineArg} not located.`); //Receiving: Siberian not located.
    return;
  }

  console.log(data[0]['description']);
  console.log(typeof data);
});

  