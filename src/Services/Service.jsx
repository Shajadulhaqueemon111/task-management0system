import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [services,setServices]=useState([])

    useEffect(()=>{

        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))

    },[])
    return (
        <div>
        <h1 className='text-3xl font-bold text-center mb-4 mt-3 text-blue-500'>Services User</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Service;