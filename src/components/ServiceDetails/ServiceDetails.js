import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../Hooks/useServices';

const ServiceDetails = () => {

     const [services, setServices] = useServices();
     console.log(services);

    return (
        <div>
            <h2>this is service details: </h2>
             
        </div>
    );
};

export default ServiceDetails;