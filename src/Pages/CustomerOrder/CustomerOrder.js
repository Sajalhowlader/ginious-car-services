import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const CustomerOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    console.log(user)
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email
            const url = `http://localhost:5000/order?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrders(data)
        }
        getOrders()
    }, [user])
    return (
        <div>
            <h1>Orders-------------{orders.length}</h1>
        </div>
    );
};

export default CustomerOrder;