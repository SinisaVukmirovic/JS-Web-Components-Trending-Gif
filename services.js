// function to fetch the gif from Giphy API.
const API_KEY = 'CLPCegGycqjrikeN3HIOGA2VqXpxcfFT';
const url = `https://cors-anywhere.herokuapp.com/http://api.giphy.com/v1/gifs/trending?api_key=` + API_KEY + `&limit=1`;
export {API_KEY, url}; // export the url so that i can be used externally.