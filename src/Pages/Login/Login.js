import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../firebase.init';
import axios from 'axios';
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        const { data } = await axios.post('http://localhost:5000/login', { email });
        console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        if (user) {
            navigate('/checkout')
        }
    }
    if (error) {
        console.log(error);
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

            </div>
        </div>
    );
};

export default Login;