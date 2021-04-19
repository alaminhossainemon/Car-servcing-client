import React from 'react';

const Footer = () => {
    return (
        <footer className=' text-white mt-5 text-center' style={{backgroundColor:'black',height:"500px"}}>
            <div className="row d-flex align-items-center justify-content-center ">
            <div className="col-md-4">
                <p>H#000 (0th Floor), Road #00,
                New DOHS, Mohakhali, Dhaka, Bangladesh
                </p>
            </div>
            <div className="col-md-2 mt-5">
                <h5>Company</h5>
                <ul style={{listStyle:'none'}}>
                    <li>About</li>
                    <li>Project</li>
                    <li>Our Team</li>
                    <li>Terms Condition</li>
                    <li>submit listing</li>
                </ul>
            </div>
            <div className="col-md-2 mt-5">
                <h5>Quick Links</h5>
                <ul style={{listStyle:'none'}}>
                    <li>Links</li>
                    <li>Blogs</li>
                    <li>rentals</li>
                    <li>Sales</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="col-md-4 mt-5">
                <h5>About us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Purus commodo ipsum
            duis laoreet maecenas. Feugiat </p>
    </div>
            </div>
        </footer>
    );
};

export default Footer;

