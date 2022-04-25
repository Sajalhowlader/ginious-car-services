import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1>You are about to book:{services.name}</h1>
            <Link to={`/bookService/${serviceId}`}>Book this service</Link>
        </div>
    );
};

export default ServicesDetails;