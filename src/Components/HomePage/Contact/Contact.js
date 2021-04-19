import React from 'react';
import MechanicData from './MechanicData';
import img1 from '../../../Image/Ellipse 90.png'
import img2 from '../../../Image/Ellipse 91.png'
import img3 from '../../../Image/Ellipse 92.png'

const Contact = () => {
    const mechanicData =[{
        name:"Angela",
        Phone:1234567,
        img:img1
    },{
        name:"Samson",
        Phone:1234567,
        img:img2
    },{
        name:"David",
        Phone:1234567,
        img:img3
    },]
    return (
        <section style={{backgroundColor:'lightgrey'}}>
            <div className="container">
            <div className="text-center">
                <p>Contact</p>
                <h3>Let us handle your <br/>
                project, professionally.</h3>
            </div>
            <div className="row">
               {
                   mechanicData.map(data =><MechanicData data={data}></MechanicData>)
               }
            </div>
            </div>
        </section>
    );
};

export default Contact;