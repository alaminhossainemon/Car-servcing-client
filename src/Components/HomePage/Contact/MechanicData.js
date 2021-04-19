import { Card } from 'react-bootstrap';
import React from 'react';

const MechanicData = ({data}) => {
    const{name,Phone,img} = data;
    return (
        <div className='col-md-4'>
           <Card cardstyle={{ width: '18rem' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                   Phone: {Phone}
                    </Card.Text>
                </Card.Body>
                </Card> 
        </div>
    );
};

export default MechanicData;