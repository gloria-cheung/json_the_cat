const request = require("request");
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(url, (error, response, body) => {
  if (error) {
    // such as if you mispell the URL
    console.log("error occurred: ", error);
  }
  const data = JSON.parse(body);
  // if breed does not exist in the API, the body will be an empty array
  if (data.length === 0) {
    console.log("breed not found, try again");
  } else {
    // only extracting the data from first index which will print the description of that breed
    console.log(data[0].description);
  }
});