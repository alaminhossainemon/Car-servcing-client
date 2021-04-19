import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const MangeService = () => {
    const [imageURl, setImageURL] = useState(null);

    const { register, handleSubmit } = useForm();
  
    const onSubmit = data => {
      const eventData = {
        name: data.name,
        price: data.price,
        imageURl : imageURl
        
      };
     
      fetch('https://mighty-ocean-08818.herokuapp.com/addService',{
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
    };
    const handleImage = e => {
      const imageData = new FormData();
      imageData.set('key','97264d06d5bc59aa68be513067843c81');
      imageData.append('image', e.target.files[0]);
   
      axios.post('https://api.imgbb.com/1/upload', 
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
    return (
     <div className="row">
         
            <Sidebar></Sidebar>
         <div className="col-md-10 mt-5">
    <form onSubmit={handleSubmit(onSubmit)}>
        <input name ='name' className="form-control" ref={register} type="text" placeholder="service name " />
        <br />
        <input name='price' className="form-control" ref={register} type="text" placeholder="price" />
        <br />
        <input ref={register} className="form-control" onChange={handleImage} type="file" placeholder="upload a image" /><br/><br/>
        <input type="submit" className="btn btn-primary" /> 
       
    </form>
         </div>
     </div>
    );
};

export default MangeService;
