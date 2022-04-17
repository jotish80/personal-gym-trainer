import React from 'react';
import { Link} from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import gym  from'../../images/gym-.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
     const [user] = useAuthState(auth);
   
    const handleLogOut = () => {
      signOut(auth);
    }      
    return (

         
        <div>
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-dark sticky-top fixed-bottom">
                <div className="container-fluid">
                    <Link to='/'>
                     <img style={{width:'60px'}} src={gym} alt="" />
                     </Link>
                    <div className="collapse navbar-collapse navbar-expand-sm navbar-toggler" id="navbarTogglerDemo01">
                        
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li className="nav-item">
                                <CustomLink className="nav-link active fs-5 fw-bold text-white" aria-current="page" to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link active fs-5 fw-bold text-white" aria-current="page" to="/services">Services</CustomLink>
                            </li>
                            <li className="nav-item">
                                {
                                    user ? 
                                     <button onClick={handleLogOut}>LogOut</button>
                                     :
                                     <CustomLink className="nav-link active fs-5 fw-bold text-white" aria-current="page" to="/login">Login</CustomLink>
                                }
                                
                            </li>
                            {
                                !user  &&
                                (<li className="nav-item">
                                <CustomLink className="nav-link active fs-5 fw-bold text-white" aria-current="page" to="/register">Register</CustomLink>
                                </li>)
                            }
                            
                            <li className="nav-item">
                                <CustomLink className="nav-link active fs-5 fw-bold text-white" aria-current="page" to="/about">About</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className="nav-link active fs-5 fw-bold text-white" aria-current="page" to="/blogs">Blogs</CustomLink>
                            </li>
                           
                        </ul>
                         
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;