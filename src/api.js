import Home from "src/routes/Home.js"
const apiKeyNasa = process.env.REACT_APP_API_KEY;
const apiCount = 12;

export const retreiveAsteroid = () => {
return fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${apiKeyNasa}&count=${apiCount}`)
.then(response => response.json())
}