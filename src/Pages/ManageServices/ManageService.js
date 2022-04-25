import React, { useEffect, useState } from 'react';

const ManageService = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure")
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(results => {
                    console.log(results)
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                })
        }
    }
    return (
        <div className='mx-auto w-75'>
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h4 className='mx-auto w-full'>Service:{service.name} <button onClick={() => handleDelete(service._id)}>❌</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageService;