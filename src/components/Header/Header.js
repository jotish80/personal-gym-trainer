import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Services from '../Services/Services';

const Header = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/services' element={<Services />}></Route>
            </Routes>
        </div>
    );
};

export default Header;