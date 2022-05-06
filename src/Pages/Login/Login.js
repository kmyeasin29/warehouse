import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const navigate=useNavigate();
    const location=useLocation();

    let from=location.state?.from?.pathname || "/Inventory"

    if(user){
        navigate(from, {replace:true});
    }

    const handleLogin=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-50 mx-auto p-2'>
            <h2 className='text-center text-danger mt-2 display-4'>Login</h2>
            <Form className='container border' onSubmit={handleLogin}>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="danger" type="submit">
                    Login
                </Button>
                <p className='mt-3 fs-5'>New to Car Leader??? <Link className='text-decoration-none pe-auto text-danger' to='/Register'>Register Now</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;