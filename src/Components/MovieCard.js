import React from 'react';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import './MovieCard.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const navigate = useNavigate ()
 

  return (
    <div>
       
    <Card style={{ width: "18rem" }} className = "cardStyle">
      <Card.Img variant="top" src={movie.posterUrl} width = "80%" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text color = "red">
         {movie.description}
        </Card.Text>
        <ReactStars
          count={5}
          value = {movie.rate}
          size={24}
          color2={'#ffd700'} > {movie.rate} </ReactStars>
      </Card.Body>
      <Button variant="secondary" onClick={() => navigate (`/Description/${movie.id}`)}>
      Description
    </Button>
      <Button variant="secondary" onClick ={() => navigate(`../Trailer/${movie.id}`)}>
            trailer
          </Button>
    </Card>
    </div>
  )
}

export default MovieCard