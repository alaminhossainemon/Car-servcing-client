import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const [reviews , setReviews] = useState([]);
    useEffect(() => {
        fetch('https://mighty-ocean-08818.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <section style={{backgroundColor:'lightcyan'}} className="mt-5" >
           <div className="container">
               <div className="text-center mb-5">
                   <h3 className="text-brand">Testimonials</h3>
               </div>
           <div className="row">
           {
               reviews.map(review =><TestimonialCard review={review}></TestimonialCard>)
           }
           </div>
           </div>
        </section>
    );
};

export default Testimonial;