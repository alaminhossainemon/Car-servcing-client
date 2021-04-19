import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const review ={
            name:data.name,
            description:data.description
        }
        fetch('https://mighty-ocean-08818.herokuapp.com/addReviews',{
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(review)
      })
      .then(res => console.log('server side response', res))
    };
    
    return (
        <div className='row'>
                <Sidebar></Sidebar>
            <div className="col-md-10 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name ='name' className="form-control" ref={register} type="text" placeholder=" Name " />
                <br />
                <input name='description' className="form-control form-control-lg" ref={register} type="text" placeholder="description" />
                <br />
                <input type="submit" className="btn btn-primary" /> 
            </form>
            </div>
        </div>
    );
};

export default Review;
