 import { useState, useEffect } from 'react';
 import './App.css'
import axios from 'axios'
import Space from "./Space"





//  const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY


 function App() {
    const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"
    const startDate = "2021-12-12"
    const apiNumber="10"
    const keyUrl = "https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=${apiNumber}"
     
    
    const [pictures, usePictures] = useState([]);
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
        usePictures(res.data);
        nowUpdating(false);
    })
    .catch((err) => {
        console.error(err)
    })
}

return (
    <div className='App container'>
        <div className='head'>
            <div className="title">
                <h2>Spacestagram</h2>
                
            </div>
        </div>
    </div>
)


 }
export default App;
// class App extends Component{

    
// constructor(props) {
//     super(props);
//     this.state = {
//         items: {},
//         isLoaded: false,
//     }
// }


// componentDidMount() {
//     fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
//     .then(res => res.json())
//     .then(json => {
//         this.setState({
//             isLoaded: true,
//             items: json.items
//         })
//     })
// }


// render(){

//     var { isLoaded, items } = this.state;
//     if (!isLoaded) {
//         return <div> processing</div>
//     }
//     else {

//     return (
//         <div className="App">
//             <ul>
//                 {items.map(item => (
//                     <li key={item.title}>
//                         {item.url}
//                     </li>
//                 ))}
//             </ul>
//             </div>
//     )
// }
// }
// }

// // const [pictures, importPictures] = useState(null);
// // const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"

// // const fetchData = async () => {
// //     const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}`)
// //     importPictures(response.data)
// // }


// // return (
// //     <div className="App">
// //         <h1>Spacestagram</h1>
// //         <h2>Fetch a list from an API and display it</h2>

// //         {/* Fetch data from API */}
// //         <div>
// //           <button className="fetch-button" onClick={fetchData}>
// //             Fetch Planets
// //           </button>
// //         </div>

// //         {/* Display data from API */}
// //         <div className="pictures">
// //     {pictures && 
// //         pictures.map((picture, index) => {
// //             // const pictureRelease = new Date(picture.released).toDateString();
            
// //             return (
// //                 <div className='picture' key={index}>
// //                     <h4>Picture {index+1} </h4>
// //                     <h3>{picture.title}</h3>

// //                     <div className='information'>
// //                         {/* <p>{description}</p>
// //                         <p>{date}</p> */}
// //                         </div>
// //                         </div>
// //             )
// //         })}
         
// //         </div>

// //       </div>
// // )
// // // const [rendering, nowRendered] = useState(false);
   
     
// //     //   .then(response => {
// //     //       if(!response.ok) {
// //     //           throw Error("ERROR");
// //     //       }
// //     //       return response.json();
// //     //     })
// //     //     .then (data => {
// //     //         console.log(data.data);
// //     //         const html = data.data
// //     //         .map(user => {
// //     //             return
// //     //         })
// //     //     })

   
// // //       ).catch(error => {
// // //           console.log(error)
// // //       })
// // //    }, []
// // //     )

// //     // useEffect(() => {
// //     //     retreiveImage();

// //     // }, [retreiveImage]);


// //     // return (
// //     //     <div>hello</div> 
// //     // )



// //  }



// export default function App() {
//     return <Homepage/>
// }