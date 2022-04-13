import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, discription, picture, price } = service
    const navigate = useNavigate()
    const ServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container' >
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h1>${price}</h1>
            <p>{discription}</p>
            <button onClick={() => ServiceDetails(id)} className='service-btn'>Book This {name}</button>
        </div>
    );
};

export default Service;