const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      // such as if you mispell the URL
      callback(error);
    }
    const data = JSON.parse(body);
    // if breed does not exist in the API, the body will be an empty array
    if (data.length === 0) {
      error = "breed not found, try again";
      callback(error);
    } else {
      // only extracting the data from first index which will print the description of that breed
      callback(error, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };