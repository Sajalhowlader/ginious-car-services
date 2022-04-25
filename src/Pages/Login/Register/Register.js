import React from "react";
import { Link, useNavigate, } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialIcon from "../SocialIcon/SocialIcon";

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmitFrom = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home#experts')
    }

    return (
        <div className="from-container">
            <h2>Sing Up</h2>
            <form onSubmit={handleSubmitFrom}>
                <input type="text" name="name" id="" placeholder="enter your name" />
                <br />
                <input type="email" name="email" id="" placeholder="enter your email" />
                <br />
                <input type="password" name="password" id="" placeholder="enter your password" />
                <br />
                <input type="password" name="confirmPassword" id="" />
                <br />
                <input type="submit" value="sing Up" />
            </form>
            <p className="sing-up-togel">Already have an account?
                <Link className="new-ema" to="/login"> Log In</Link></p>
            <h4>Or</h4>
            <SocialIcon />
        </div>
    );
};

export default Register;