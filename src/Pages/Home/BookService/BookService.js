import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const BookService = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState({})
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            name: e.target.name.value,
            email: user.email,
            service: services.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(res => {
                const { data } = res
                if (data.insertedId) {
                    alert('your order is booked')
                    e.target.reset()
                }

            })
    }
    return (
        <div className='text-center mx-auto w-50'>
            <h1 >Book services : {services.name}</h1>
            <form onSubmit={handlePlaceOrder} >
                <input className='mb-2 w-100' type="text" name="name" id="" placeholder='Name' />
                <input className='mb-2 w-100' type="email" name="email" id="" value={user?.email} placeholder='Email' />
                <input className='mb-2 w-100' value={services.name} type="service" name="service" id="" placeholder='Service' readOnly />
                <br />
                <input className='mb-2 w-100' type="text" name="address" id="" placeholder='Address' />
                <br />
                <input className='mb-2 w-100' type="text" name="phone" id="" placeholder='Phone' />
                <br />


                <input type="submit" value="Submit" />

            </form>
        </div>

    );
};

export default BookService;