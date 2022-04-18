import React, {  useRef, useState } from 'react';
import './LogIn.css';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { GoogleAuthProvider, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 


const LogIn = () => {
    // const [user] =useAuthState(auth);
     
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate()
    // const [email, setEmail] = useState('');
    
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    let errorElement;
    if(error){
        errorElement = <div><p className='text-danger'>{error && "email or password don't match"}</p></div>
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();
    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result => {
                const user = result.user;
                navigate(from, {replace: true});
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
        navigate(from, {replace: true});
    }

    // const handleEmailChange = (event) =>{
    //     const emailSyntax = /\S+@\S+\.\S+/;
    //     const validEmail =emailSyntax.text(event.target.value);

    //     if(validEmail){
    //         setEmail(event.target.value)
    //     } else{
    //         setEmail('Invalid email')
    //     }
    // }

    const navigateRegister = (event) => {
        navigate('/register')
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
         if(email){
             await sendPasswordResetEmail(email);
             toast('Sent Email')
         }
         else{
             toast('please enter your email')
         }
    }
    return (
        <div className='container w-25 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded rounded-3'>
            <h2 className='text-center text-primary'>Login</h2>
            <form onSubmit={handleSubmit}>
               
                <div className="mb-3">
                    <label   className="form-label">Email address</label>
                    <input type="email" ref={emailRef} className="form-control"aria-describedby="emailHelp" required  />
                    <div id="emailHelp" className="form-text"></div>
                    
                </div>
                <div className="mb-3">
                    <label   className="form-label">Password</label>
                    <input type="password" ref={passRef} className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{border: '1px solid blue', width:'200px'}}></div>
                    <p style={{marginTop: '10px', padding:'10px'}}>OR</p>
                    <div style={{border:'1px solid blue', width:'200px'}}></div>
                </div>
                {errorElement}
            <button onClick={handleSignInWithGoogle} className='btn btn-success w-100 mb-2'>Login with Google</button>
            <p>New User? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>please register</Link></p>
            <p>Forget password? <button className='btn btn-link text-primary' onClick={resetPassword}>Reset Password</button></p>
            <ToastContainer />
        </div>
    );
};

export default LogIn;