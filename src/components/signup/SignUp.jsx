import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

export const SignUp = () => {
    const [first, setFirst] = useState ("")
    const [last, setLast] = useState ("")
    const [mail, setMail] = useState ("")
    const [password, setPassword] = useState ("")
    const [again, setAgain] = useState ("")

 // handle form submit
 const handleSubmit = (e) => { 
  e.preventDefault();
  console.log("First Name: ", first);
  console.log("Last Name: ", last);
  console.log("Email ", mail);
  console.log("Password ", password);
  console.log("Password ", again);
};

    return (
        <div className='container mt-4'>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" value={first}
              onChange={(e) => setFirst(e.target.value)}/>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name"  value={last}
              onChange={(e) => setLast(e.target.value)}/>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  value={mail}
              onChange={(e) => setMail(e.target.value)}/>
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password Again"  value={again}
              onChange={(e) => setAgain(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </form>
        </div>
      );
    }

export default SignUp