// import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Register = () => {

    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegisterFrom = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const conformPassword = event.target.conformPassword.value;
        console.log(email, password, conformPassword)
        createUserWithEmailAndPassword(email, password)
        console.log(user)
    }
    if (user) {
        navigate('/e')
    }
    return (
        <div className="from-container">
            <h2>Sing Up</h2>
            <form onSubmit={handleRegisterFrom} >
                <div className="group-container">
                    <div >
                        <label className="label" >Email</label>
                        <input className="input-type" type="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div >
                        <label className="label">Password</label>
                        <input className="input-type" type="password" name="password" placeholder="Enter your password" required />
                    </div>
                    <div >
                        <label className="label">Conform Password</label>
                        <input className="input-type" type="password" name="conformPassword" placeholder="Conform your password" required />
                    </div>
                </div>
                <input className="login_submit_btn" type="submit" value="Sing Up" />
            </form>
            <p className="sing-up-togel">Already have an account?
                <Link className="new-ema" to="/login"> Log In</Link></p>
        </div>
    );
};

export default Register;