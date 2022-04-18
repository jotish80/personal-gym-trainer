import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 

const ServiceDetails = () => {

    const {serviceId} = useParams()
    const [service, setService] = useState({});
 
     useEffect(()=>{
        fetch('../../services.json')
        .then(res => res.json())
        .then(data => {
             const service =  data.filter(service => service.id == serviceId); 
             setService(service[0]);
        })      
    },[]);
         
    return (
        <div className='container mt-5'>
            <h2 className='text-primary'>{service.name}</h2>
            <div>
              <img style={{width: '50%'}} src={service.img} alt="" />
            </div>
            <h2>${service.price} </h2>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceDetails;