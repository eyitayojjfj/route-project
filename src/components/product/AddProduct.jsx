import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export const AddProduct = () => {
      const [title, setTitle] = useState ("")
      const [description, setDescription] = useState ("")
      const [[price], setPrice] = useState ("")
      const [image, setImage] = useState ("")

   // handle form submit
   const handleSubmit = (e) => { 
    e.preventDefault();
    console.log("Title: ", title);
    console.log("Price: ", price);
    console.log("Image: ", image);
    console.log("Description: ", description);
};

    return (
        <div className='container mt-4'>
        <div>
              <h1>Add Product</h1>
        </div>
       
        <div>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>Product Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product url"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product url"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
        </div>
        </div>
      );

}

export default AddProduct