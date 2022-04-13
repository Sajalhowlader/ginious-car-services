import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/icon/google3.png'
import './Login.css'
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }
    const navigateTogole = e => {
        navigate("/register")
    }
    return (
        <div>
            <div className='from-container'>
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className='group-container'>
                        <div>
                            <label className='label' htmlFor="text">Email</label>
                            <input ref={emailRef} className='input-type' type="email" placeholder='Enter your email' required />
                        </div>
                        <div >
                            <label className='label' htmlFor="password">Password</label>
                            <input ref={passwordRef} className='input-type' type="password" placeholder='Enter your password' required />
                        </div>
                    </div>

                    <input className='login_submit_btn' type="submit" value="Login" />
                </form>
                <p className='sing-up-togel'>New to car doctor?  <span onClick={navigateTogole} className='new-ema'> Create an account</span></p>
                <button className='google-sing-btn'>
                    <img src={image} alt="" />
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;