import { UserContext } from './../../../App';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Payment from './Payment';
import { useForm } from "react-hook-form";

const DashboardMain = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [orders,setOrders] = useState({});
  const [services, setServices] = useState([]);
  const{id} = useParams();
  useEffect(()=>{
    fetch('http://localhost:4000/services')
    .then(response => response.json())
    .then(data =>setServices(data))

  },[]);
  const onSubmit = data => {
    const orderData ={
      name:data.name,
      email:data.email,
      service:service?.name
    };
    setOrders(orderData)  
  }
  const handlePaymentData = paymentId =>{
    const paymentData ={
      orders,
      paymentId
    }
    fetch('http://localhost:4000/addOrder',{
      method:'POST',
      headers:{ 'content-type': 'application/json'},
      body:JSON.stringify(paymentData)
    })
    .then(res => console.log('server side res',res))
  };

  const service = services.find(service =>service._id === id);
    return (
        <div className="col-md-10">
          <div className="mt-5">
            <h3>Book details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name ='name' className="form-control" ref={register} type="text"  placeholder=" Name " />
                <br />
                <input name='email' className="form-control" ref={register} defaultValue={loggedInUser.email} type="text" placeholder="email" />
                <br />
                <input type="submit" className="btn btn-primary" /> 
            </form>
          </div>
          <div className="mt-5">
            <h3>Service Name:{service?.name}</h3>
            <h3>Total price:{service?.price}</h3>
          </div>
          <div className="mt-5">
            <h3>Payment process</h3>
            <Payment handlePaymentData={handlePaymentData}></Payment>
          </div>
        </div>
    );
};

export default DashboardMain;