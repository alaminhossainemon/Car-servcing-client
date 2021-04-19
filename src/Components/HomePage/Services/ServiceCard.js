import { Card } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    
    const {_id,name,price,imageURl} = props.service;
    return (
        
            <div className='col-md-4'>
                <Link to={`/dashboard/${_id}`}>
             <Card cardstyle={{ width: '18rem' }}>
                <Card.Img  variant="top" src={imageURl}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Price:${price}
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
        </div>
       
    );
};

export default ServiceCard;