 import { useState, useEffect } from 'react';
 import './css/App.css'
import axios from 'axios'
import Space from "./Space"





//  const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY


 function App() {
    const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"
  //choose a certain number of pictures to display  
    const apiNumber="20"
  
     
    //set up useState functions to show the process for contect loading
    const [pictures, setPictures] = useState([]);
     const [updating, nowUpdating] = useState(false);

    //use the useEffect to establish connectivity after the system has rendered
    useEffect(() => {
        try {
            fetchAPI();
        } catch (err) {
            console.log(err)
        }
    }, []);
    

//fetching the api call to select images
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

//displays the information loading to page
return (
    <div className='heading'>
       <h2 >Spacestagram</h2>
       <h3> Here lies all the amazing content that you want to see :)</h3>
       <h3> Try clicking the like and happy buttons to test the system :D</h3>
       
                
     
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
