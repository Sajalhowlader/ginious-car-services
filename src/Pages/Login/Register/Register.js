import React from 'react';

const Register = () => {
    return (
        <div className='from-container'>
            <h2>Sing Up</h2>
            <form >
                <div className='group-container'>
                    <div className="input-group">
                        <label htmlFor="text">Email</label>
                        <input className='input-type' type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input className='input-type' type="password" placeholder='Enter your password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="conform-password">Conform Password</label>
                        <input className='input-type' type="password" placeholder='Conform your password' required />
                    </div>
                </div>
                <input className='login_submit_btn' type="submit" value="Sing Up" />
            </form>
            <p className='sing-up-togel'>Already have an account?
                <span className='new-ema' to="/login">Log In</span></p>
        </div>
    );
};

export default Register;