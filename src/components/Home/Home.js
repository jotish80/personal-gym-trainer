import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import mainImg from '../../images/total-shape-TY_Ce5d2G-k-unsplash.jpg'
import Services from '../Services/Services';
 

const Home = () => {
    return (
        <div>
            <img style={{width: '100%' }} src={mainImg} alt="" />
            <div className='container'>
                <Services />
            </div>
            
            <ContactUs />
        </div>
    );
};

export default Home;