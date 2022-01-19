 import { useState, useEffect } from 'react';
 import './css/App.css'
import axios from 'axios'
import Space from "./Space"





//  const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY


 function App() {
    const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"
    // const startDate = "2021-12-12"
    const apiNumber="10"
    // const keyUrl = "https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=${apiNumber}"
     
    
    const [pictures, setPictures] = useState([]);
     const [updating, nowUpdating] = useState(false);

    useEffect(() => {
        try {
            fetchAPI();
        } catch (err) {
            console.log(err)
        }
    }, []);
    


const fetchAPI = () => {
    nowUpdating(true);
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=${apiNumber}`)
    .then((res) => {
        setPictures(res.data);
        nowUpdating(false);
    })
    .catch((err) => {
        console.error(err)
    })
}

return (
    <div className='heading'>
       <h2>Spacestagram</h2>
                
     
    {updating ? (
        <h2 className='textloading text-center'>Loading...</h2>
      ) : (
        <div className='row'>
            {pictures.map((picture, key) => {
            return (
             <div key={key} className='col-lg-6 col-md-12'>
             <Space picture={picture} />
              </div>
            );
          })}
        </div>
      )}

    </div>
)


 }
export default App;
