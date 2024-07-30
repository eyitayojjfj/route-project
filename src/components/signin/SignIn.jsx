import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


export const SignIn = () => {
    const [mail, setMail] = useState ("")
    const [password, setPassword] = useState ("")


    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log("Email: ", mail);
        console.log("Password: ", password);
    }

    return (
        <div className='container mt-4'>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={mail}
              onChange={(e) => setMail(e.target.value)}/>
           
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </form>
        </div>
      );
    }

export default SignIn