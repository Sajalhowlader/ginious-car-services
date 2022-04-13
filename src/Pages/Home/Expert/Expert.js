import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, outline } = expert
    return (
        <div className='col-md-4 col-12 col-sm-6' >
            <div className=' border text-center text-sm-center'>

                <img className='img-fluid w-100' src={img} alt="" />
                <h2>{name}</h2>
                <p>{outline}</p>
                <button className='bg-primary mx-auto w-100 border-0 py-2 p-1'>Go with me</button>
            </div>
        </div>
    );
};

export default Expert;