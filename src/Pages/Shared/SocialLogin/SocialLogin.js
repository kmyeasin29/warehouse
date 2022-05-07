import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let erroElement;

    if (error) {
        erroElement=<div>
        <p className='text-danger'>Error: {error.message}</p>
    </div>
    }
    if (user) {
        navigate('/Home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className="bg-danger w-50"></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "1px" }} className="bg-danger w-50"></div>
            </div>
            {erroElement}
            <Button onClick={() => signInWithGoogle()} className='w-100' variant="dark" type="submit">
                <img className='mx-3' style={{ width: "25px" }} src='https://i.ibb.co/JpGQ3wX/google.png'></img>
                Continue With Google
            </Button>

        </div>
    );
};

export default SocialLogin;