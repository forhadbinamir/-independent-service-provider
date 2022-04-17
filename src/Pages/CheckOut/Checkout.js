import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceDetails } = useParams()

    return (
        <div>
            <h1>This is check : {serviceDetails}</h1>
        </div>
    );
};

export default Checkout;