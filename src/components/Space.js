import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap'

const Space = ({ picture }) => {

    const title = picture.title
    const explanation = picture.explanation
    const date = picture.date
    const url = picture.url


    const [heart, setHeart] = useState(false);

    const makeliked = () => {
        setHeart(!heart);
    };

    // const setLiked = () => {
    //     this.useState({liked: this.state.liked})
    // }

    return (
        <Card style={{ width: '90rem' }}>
  <Card.Body className='App text-center'>
      <br></br>
    <Card.Title className="title"> {title}</Card.Title>
    <br></br>
    <Card.Subtitle className="mb-2 text-muted"> Date Taken ~ {date}</Card.Subtitle>
    <br></br>
    <Card.Text className='wording'>
      {explanation}
    </Card.Text>
    <br></br>
    <Card.Img className="img" alt="NASA PHOTO" variant="top" src={url} />
    {/* <Card.Img className="img" alt="NASA PHOTO" variant="top" iframe={url}/> */}
    <br></br>
    <div>
    <Button className="btn" onClick={makeliked}> 
    LOVE THIS
    {heart ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
    </Button>
    </div>
  </Card.Body>
</Card> 
    )

}



export default Space;