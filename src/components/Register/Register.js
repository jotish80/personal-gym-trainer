import React from 'react';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from'../../Firebase/firebase.init';
import { Link, useNavigate } from 'react-router-dom';
 
 
const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    if(user){
        navigate('/')
    }

     const handleRegister = (event) =>{
         event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const password = event.target.password.value;
         createUserWithEmailAndPassword(email, password);
     }
    return (
        <div className='container w-25 mx-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded rounded-3'> 
            <h2 className='text-center text-primary'>Register</h2>
            <form onSubmit={handleRegister} >
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="name" name='name' className="form-control"/>
                        <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control"required/>
                        <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" name='password'  className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">Register</button>
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>please Login</Link></p>
        </div>
    );
};

export default Register;