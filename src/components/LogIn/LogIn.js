import React, { useRef } from 'react';
import './LogIn.css';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const LogIn = () => {
    // const [user] =useAuthState(auth);
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate()
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const provider = new GoogleAuthProvider();
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result => {
                const user = result.user;
                console.log(user);
            }))
            .catch((error => {
                console.log(error);
            }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass);
    }

    if (user) {
        navigate('/');
    }

    const navigateRegister = (event) => {
        navigate('/register')
    }
    return (
        <div className='container w-25 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded rounded-3'>
            <h2 className='text-center text-primary'>Login</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label   className="form-label">Email address</label>
                    <input type="email" ref={emailRef} className="form-control"aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label   className="form-label">Password</label>
                    <input type="password" ref={passRef} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{border: '1px solid blue', width:'200px'}}></div>
                    <p style={{marginTop: '10px', padding:'10px'}}>OR</p>
                    <div style={{border:'1px solid blue', width:'200px'}}></div>
                </div>
            <button onClick={handleSignInWithGoogle} className='btn btn-success w-100 mb-2'>Login with Google</button>
            <p>New User? <Link to='/register' className='text-danger text-decoration-none' onClick={navigateRegister}>please register</Link></p>
        </div>
    );
};

export default LogIn;