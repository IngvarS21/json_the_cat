const request = require('request');
  
const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

    if (error) {
      callback(error);
      return;
    }
  
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(`${breedName} not located.`);
      //console.log(`${cmdLineArg} not located.`); //Receiving: Siberian not located.
      return;
    }
    callback(error, data[0].description);
  // console.log(data[0]['description']);
  // console.log(typeof data);
  });
};


module.exports = { fetchBreedDescription };