import React from 'react';
import image from '../../../images/icon/google3.png'

const SocialIcon = () => {
    return (
        <div>
            <button className='google-sing-btn'>
                <img src={image} alt="" />
                <span>Continue With Google</span>
            </button>
        </div>
    );
};

export default SocialIcon;