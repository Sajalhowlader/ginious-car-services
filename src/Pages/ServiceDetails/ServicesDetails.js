import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>hello services{serviceId}</h1>
        </div>
    );
};

export default ServicesDetails;