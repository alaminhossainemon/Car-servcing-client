import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('pk_test_51IglQDB3OtnpWVQTL9cjD3nurLu5MxmWDBAwAjBWw4Jfw1Sa1fSv7rafnDLnvq2p6hYSTAOAeTPyIQ5glJYA9NYf000n4xnqtn');
const Payment = ({handlePaymentData}) => {
    return (
        <Elements stripe={stripePromise}>
        <PaymentForm handlePaymentData={handlePaymentData}></PaymentForm>
      </Elements>
    );
};

export default Payment;