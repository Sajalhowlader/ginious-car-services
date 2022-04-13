import React from 'react';
import img1 from '../../../../images/experts/expert-1.jpg'
import img2 from '../../../../images/experts/expert-2.jpg'
import img3 from '../../../../images/experts/expert-3.jpg'
import img4 from '../../../../images/experts/expert-4.jpg'
import img5 from '../../../../images/experts/expert-5.jpg'
import img6 from '../../../../images/experts/expert-6.png'
import Expert from '../../Expert/Expert';

const experts = [
    { id: 1, name: "Debid Orner", img: img1 },
    { id: 2, name: "Jhon Smith", img: img2 },
    { id: 3, name: "Don Joker", img: img3 },
    { id: 4, name: "Mark Jaent", img: img4 },
    { id: 5, name: "Helari Klinton", img: img5 },
    { id: 6, name: "Sakib Khan", img: img6 }
]


const Exparts = () => {

    return (
        <div>
            <h1>Our Experts</h1>
            <div>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert} />)
                }
            </div>
        </div>
    );
};

export default Exparts;