import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const confirmPasswordRef=useRef('');

    const handleRegister=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        const confirmPassword=confirmPasswordRef.current.value;
        console.log(email, password, confirmPassword);

    }
    return (
        <div className='w-50 mx-auto p-2'>
        <h2 className='text-center text-danger mt-2 display-4'>Register</h2>
        <Form className='container border' onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='w-100' variant="danger" type="submit">
            Register
            </Button>
            <p className='mt-3 fs-5'>Already Registered??? <Link className='text-decoration-none pe-auto text-danger' to='/Login'>Login</Link></p>
        </Form>
    </div>
    );
};

export default Register;