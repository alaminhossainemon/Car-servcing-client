import { Card } from 'react-bootstrap';
import React from 'react';
import washingtonImg from '../../../Image/car-mechanic-wearing-white-uniform-stand-holding-wrench.jpg'
import parkImg from '../../../Image/car-wash-detailing-station.jpg'
import grogeusImg from '../../../Image/mechanic-hand-checking-fixing-broken-car-car-service-garage.jpg'
const Projects = () => {
    return (
        <section style={{backgroundColor:'cadetblue'}}>
        <div className='container' >
            <div className="project-text text-center">
                <p>Projects</p>
                <h5>Discover the latest servicing<br/>available today</h5>
            </div>
            <div className="project-card row">
            <div className="col-md-4">
            <Card cardstyle={{ width: '18rem' }}>
                <Card.Img variant="top" src={washingtonImg}/>
                <Card.Body>
                    <Card.Title>Villa on Washington Avenue</Card.Title>
                    <Card.Text>
                    Dhaka, Bangladesh
                    </Card.Text>
                </Card.Body>
                </Card>
            </div>
               <div className="col-md-4 ">
               <Card cardstyle={{ width: '18rem'}}>
                <Card.Img variant="top" src={parkImg}/>
                <Card.Body>
                    <Card.Title>Villa on Washington Avenue</Card.Title>
                    <Card.Text>
                    Dhaka, Bangladesh
                    </Card.Text>
                </Card.Body>
                </Card>
               </div>
                <div className="col-md-4">
                <Card cardstyle={{ width: '18rem' }}>
                <Card.Img variant="top" src={grogeusImg}/>
                <Card.Body>
                    <Card.Title>Villa on Washington Avenue</Card.Title>
                    <Card.Text>
                    Dhaka, Bangladesh
                    </Card.Text>
                </Card.Body>
                </Card>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Projects;