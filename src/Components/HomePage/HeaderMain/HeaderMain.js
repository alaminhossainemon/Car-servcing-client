import React from 'react'
import headerImg from '../../../Image/auto-mechanic-working-garage-repair-service.jpg'
const HeaderMain = () => {
    return (
        <section className='container'>
            <div className='d-flex row justify-content-center mt-3'  style={{height:'600px',backgroundColor:'lightgrey'}}>
           <div className="header-text col-md-4  align-items-center mt-5 ">
           <h3>We Build <br/>
            Your Dream
            </h3>
            <p>Online Easte Agency, the mordern way to sell your own home,You can use Griffin Residential to market your property</p> 
            <button className="btn btn-primary">Booking</button>
           </div>
           <div className="heder-img col-md-6 mt-5">
                <img className='img-fluid' style={{width:'600px'}} src={headerImg} alt=""/>
           </div>
        </div>
        </section>
    );
};

export default HeaderMain;