import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='container'>
            <h2>this is footer</h2>
            <p><small>copyright &copy; {year}</small></p>
        </div>
    );
};

export default Footer;