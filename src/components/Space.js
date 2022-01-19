import React, {useState} from 'react';
import {Card} from 'react-bootstrap'

const Space = ({ picture }) => {

    const title = picture.title
    const explanation = picture.explanation
    const date = picture.date
    const url = picture.url


    const [heart, setHeart] = useState(false);

    const makeliked = () => {
        setHeart(!heart);
    };

    return (
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
    <Card.Text>
      {explanation}
    </Card.Text>
    <Card.Img variant="top" src={url}/>
    <Card.Img variant="top" iframe={url}/>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    <Button onClick={makeliked} variant="secondary"> LOVE THIS</Button>
  </Card.Body>
</Card> 
    )

}



export default Space;