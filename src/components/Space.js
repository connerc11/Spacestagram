import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap'

const Space = ({ picture }) => {

    const title = picture.title
    const explanation = picture.explanation
    const date = picture.date
    const url = picture.url
    const mediaType = picture.media_type

//create useState hooks in order to use font awesome icons to generate like buttons
    const [heart, setHeart] = useState(false);
    const [smile, setSmile] = useState(true)

    //for the smiley fave
    const makeSmile = () => {
        setSmile(!smile)
    }

    //for the heart button
    const makeLiked = () => {
        setHeart(!heart);
    };
    

 
//create cards and give classnames
    return (
        <Card style={{ width: '90rem' }}>
  <Card.Body className='App text-center'>
      <br></br>
    <Card.Title className="title"><i className="fas fa-globe-americas"></i><br></br> {title}<br></br> <i class="fas fa-globe-americas"></i></Card.Title>
    <br></br>
    <Card.Subtitle className="mb-2 text-muted"> Date Taken ~ {date}</Card.Subtitle>
    <br></br>
    <Card.Text className='wording'>
      {explanation}
    </Card.Text>
    <br></br>
    {mediaType === "video" && <Card.Img className="img" alt="NASA PHOTO" variant="top" src={url} />}
    {mediaType === "image" && <Card.Img className="img" alt="NASA PHOTO" variant="top" src={url} />}
    <br></br>
    <div className="buttons">
    <Button className="btn" onClick={makeLiked}>
    {heart ? <i className="fas fa-heart"></i> : <i className=" far fa-heart"></i>}
    </Button>
    <br></br>
    <Button className='btn' onClick={makeSmile}>
        {smile ? <i className="far fa-smile"></i> : <i className="fas fa-frown"></i>}
    </Button>
    </div>
  </Card.Body>
</Card> 
    
    )

}




export default Space;