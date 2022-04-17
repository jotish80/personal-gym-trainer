import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import mainImg from '../../images/total-shape-TY_Ce5d2G-k-unsplash.jpg'
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Services from '../Services/Services';
 

const Home = () => {
    return (
        <div className='container'>
            <img style={{width: '100%' }} src={mainImg} alt="" />
            <Services />
            <ContactUs />
        </div>
    );
};

export default Home;