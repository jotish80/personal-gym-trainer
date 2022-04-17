import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {

    const{name, price, img, description } = props.service;

    return (
        <div className='col-md-6 col-sm-12 col-lg-4 gx-5 mt-2'>
            <div className="card" style={{width: '18rem'}}>
            <img src= {img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> {description}</p>
                <h5>${price}</h5>
                <Link to='/' className="btn btn-primary w-100">Cheek Out</Link>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;