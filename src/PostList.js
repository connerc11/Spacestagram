// import React, { Component } from "react"
// import axios from 'axios'
// import AsteroidList from "./AsteroidList"


// // const apiKeyNasa = process.env.REACT_APP_API_KEY;
// // const apiCount = 12;
// const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"

// // export const retreiveAsteroid = () => {
// // return fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${apiKeyNasa}&count=${apiCount}`)
// // .then(response => response.json())
// // }

// class PostList extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             posts: []
//         }
//     }
//     render(){
//         return(
//             <React.Fragment>
//                 <h1>Asteroids</h1>
//                 <AsteroidList datasteroid={this.state.posts}/>
//             </React.Fragment>
//         )
//     }

//     componentDidMount(){
//         axios.get(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${APIKey}`)
//         .then(response =>{
//             this.setState({
//                 posts: response.data
//             })
//             console.log(response.data)
//         })
//     }



// render() {
//     const {posts} = this.state
//     return (
//         <div>
//             <h2> My Asteroid List</h2>
            
//         </div>
//     )
// }
// }

// export default PostList



// const APIKey = "6AIGbj4jHFCcD7ChEiWMreQx3wbVgxowEsvyWVjz"
// export const getAsteroidPicture = () => {
//     return fetch (`https://api.nasa.gov/neo/rest/v1/feed?api_key=${APIKey}`)
//     .then(response => response.json())
//}