import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MangeServiceTable from './MangeServiceTable';

const MangeService = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-ocean-08818.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='row'>
            <Sidebar></Sidebar>
             <div className="col-md-10">
             <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            </table>
            {
                services.map( (service ,index )=> <MangeServiceTable service={service} index={index}></MangeServiceTable>)
            }
             </div>
        </div>
    );
};

export default MangeService;