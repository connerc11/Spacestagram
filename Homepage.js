// import React, {useState, useEffect} from 'react'
// import { propTypes } from 'react-bootstrap/esm/Image'
// import ImageList from './ImageList'
// // const nasaAPI = process.env.REACT_APP_NASA_API_KEY
// const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"
// const apiNumber = 16
// const apiCall = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=${apiNumber}`
// // const KEY = process.env.REACT_APP_NASA_API_KEY
// // const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"

// export default function NasaImage() {

//     const [image, SetPicture] = useState(null) 

//     useEffect(() => {
//     RetreivePicture()
    
//     async function RetreivePicture() {
//         const res = await fetch (
//             apiCall
//         );
//         const data = await res.json()
//         SetPicture(data.reverse())
//     }
//     }, [])

// if (!image) return <ImageList/>
    

// return (
//     <div>
//         {propTypes.data.title}
//         <ImageList>image={image}</ImageList>
//     </div>
// )
// }

