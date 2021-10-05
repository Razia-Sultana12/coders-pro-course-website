import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch("./fakeData.JSON")
        .then(res=>res.json())
        .then(data=>setServices(data));

    },[])
    return (
       
        
        <div className="services mx-3">
           <h2 className="text-center mt-5 title">Our Services</h2>
           <br />
           <p className="text-center text-secondary">CodersPro is awesome, beautifully designed online learning and education platform.<br/>Here are some of our awesome services we designed for you.</p>
           <br />
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {services.map(service=> <Service key={service.id}
            service={service}></Service>)}
            </div>
            <hr />
            
        </div>
    );
};

export default Services;