import React from 'react';
import useServices from '../Hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
 
const Services = () => {

    const [services, setServices] = useServices();


    return (
        <div id="services" className='row text-center'>
            <h1 className='text-center mt-5 mb-5 text-primary'>Services</h1>
            {
                services.map(service => <ServiceCard service={service} key={service.id} /> )
            }
        </div>
    );
};

export default Services;