import React from 'react';

import img1 from '../../../images/experts/expert-1.jpg'
import img2 from '../../../images/experts/expert-2.jpg'
import img3 from '../../../images/experts/expert-3.jpg'
import img4 from '../../../images/experts/expert-4.jpg'
import img5 from '../../../images/experts/expert-5.jpg'
import img6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';


const experts = [
    { id: 1, name: "Debid Orner", img: img1, outline: "hello im here to with you i will provt you may services" },
    { id: 2, name: "Jhon Smith", img: img2, outline: "hello im here to with you i will provt you may services" },
    { id: 3, name: "Don Joker", img: img3, outline: "hello im here to with you i will provt you may services" },
    { id: 4, name: "Mark Jaent", img: img4, outline: "hello im here to with you i will provt you may services" },
    { id: 5, name: "Helari Klinton", img: img5, outline: "hello im here to with you i will provt you may services" },
    { id: 6, name: "Sakib Khan", img: img6, outline: "hello im here to with you i will provt you may services" }
]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-primary m-5'>Our Experts</h1>
            <div className='row g-5 '>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;