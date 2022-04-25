import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const BookService = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            name: e.target.name.value,
            email: e.target.email.value,
            service: services.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
    }
    return (
        <div className='text-center mx-auto w-50'>
            <h1 >Book services : {services.name}</h1>
            <form>
                <input className='mb-2 w-100' type="text" name="name" id="" placeholder='Name' />
                <input className='mb-2 w-100' type="email" name="email" id="" placeholder='Email' />
                <input className='mb-2 w-100' value={services.name} type="service" name="service" id="" placeholder='Service' />
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