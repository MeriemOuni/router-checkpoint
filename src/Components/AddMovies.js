import React, { useState } from 'react';
import { Button,Form,Modal} from 'react-bootstrap';
const AddMovies = ({add}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title , setTitle] = useState("");
  const [rate , setRate] = useState("0");
  const [description , setDescription] = useState("");
  const [posterUrl , setPosterUrl] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleRate = (e) => {
    setRate(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value)
  }

  const handleAdd = () => {
let newMovie = {title , rate , description , posterUrl}
add(newMovie)
handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Form.Control type="text" placeholder="title" onChange={(e) => handleTitle(e)} value={title}/>
        <p>Title</p>
        <Form.Control type="number" placeholder="rate" onChange={(e) => handleRate(e)} value={rate}/>
        <p>rate</p>
        <Form.Control type="text" placeholder="description" onChange={(e) => handleDescription(e)} value={description} />
        <p>description</p>
        <Form.Control type="url" placeholder="posterUrl" onChange={(e) => handlePosterUrl(e)} value={posterUrl} />
        <p>posterUrl</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => 
          handleAdd()
          }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddMovies