import React, {useState, useEffect} from 'react'

const nasaAPI = process.env.REACT_APP_NASA_API_KEY
const apiNumber = 16
const apiCall = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=${apiNumber}`
// const KEY = process.env.REACT_APP_NASA_API_KEY
// const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"

export default function nasaImage() {

    const [image, setPicture] = useState(null) 

    useEffect(() => {
    retreivePicture()
    
    async function retreivePicture() {
        const res = await fetch (
            picture
        );
        const data = await res.json()
        setPicture(data.reverse())
    }
    }, [])


    
}