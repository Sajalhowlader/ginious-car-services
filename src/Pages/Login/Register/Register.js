import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegisterFrom = e => {
        e.preventDefault()
    }
    return (
        <div className='from-container'>
            <h2>Sing Up</h2>
            <form onClick={handleRegisterFrom} >
                <div className='group-container'>
                    <div >
                        <label className='label' htmlFor="text">Email</label>
                        <input className='input-type' type="email" placeholder='Enter your email' required />
                    </div>
                    <div >
                        <label className='label' htmlFor="password">Password</label>
                        <input className='input-type' type="password" placeholder='Enter your password' required />
                    </div>
                    <div >
                        <label className='label' htmlFor="conform-password">Conform Password</label>
                        <input className='input-type' type="password" placeholder='Conform your password' required />
                    </div>
                </div>
                <input className='login_submit_btn' type="submit" value="Sing Up" />
            </form>
            <p className='sing-up-togel'>Already have an account?
                <Link className='new-ema' to="/login"> Log In</Link></p>
        </div>
    );
};

export default Register;