import React from 'react';
import notFound from'../../images/not-found.jpg';
const NotFound = () => {
    return (
        <div className='container text-center mt-5'>
            <img style={{width:"70%"}} src={notFound} alt="" />
        </div>
    );
};

export default NotFound;