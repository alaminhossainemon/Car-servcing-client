import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import OrderListTable from './OrderListTable';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://mighty-ocean-08818.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div className= 'row'>
            <Sidebar></Sidebar>
            <div className="col-md-10">
             <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Action</th>
                </tr>
            </thead>
            </table>
            {
                orders.map((order,index) => <OrderListTable order={order} index={index}></OrderListTable> )
            }
        </div>
        </div>
    );
};

export default OrderList;