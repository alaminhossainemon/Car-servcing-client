import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';


const AddAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        fetch('http://localhost:4000/addAdmin',{
        method:'POST',
        headers:{ 'content-type': 'application/json'},
        body:JSON.stringify(data)
    })
    .then(res => console.log('server side res',res))
    }
    return (
        <div className='row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name ='email' className="form-control" ref={register} type="text"  placeholder=" Email " />
                <br/>
                <br/>
                <input type="submit" className="btn btn-primary" /> 
            </form>
            </div>
        </div>
    );
};

export default AddAdmin;