import { Card } from 'react-bootstrap';
import React from 'react';

const TestimonialCard = ({review}) => {
    const {name, description}= review;
    return (
        <div className='col-md-4 text-white'>
        <Card style={{ width: '18rem',backgroundColor:'yellowgreen' }}>
            <Card.Body>
                <Card.Title>Name:{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
};

export default TestimonialCard;