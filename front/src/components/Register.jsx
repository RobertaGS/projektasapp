import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import userServices from '../services/userServices';



const Register = () => {
    const [userName, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


        const onSubmit = e => {
            e.preventDefault();

            const setRegistration = {
                name: userName,
                email: email,
                password: password
            }
            userServices.postRegister(setRegistration)

            setUser('');
            setEmail('');
            setPassword('');
        }
  return (
    <div className='mainPage'>
        <h1 className='text-center my-3'>Registration</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>userName</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" 
                    name='text'
                    value={userName}
                    onChange={(e)=> setUser(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your Email address" 
                    name='text'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3"controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" 
                    name='text'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
    </div>
  )
}

export default Register