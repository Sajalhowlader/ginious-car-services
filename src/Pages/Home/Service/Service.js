import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, discription, picture, price } = service
    return (
        <div className='service-container' >
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h1>${price}</h1>
            <p>{discription}</p>
            <button className='service-btn'>Book This {name}</button>
        </div>
    );
};

export default Service;