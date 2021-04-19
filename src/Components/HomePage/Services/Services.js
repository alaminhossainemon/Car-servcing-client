import React,{useState, useEffect} from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setService(data));
        
    },[])
    return (
        
           <section className="mt-5 container ">
               <h3 className='text-brand text-center'>Services</h3>
               <div className='row'>
               
               {
                   service.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
               }
           </div>
           </section>
        
    );
};

export default Services;