import React from 'react';

const OrderListTable = ({order,index}) => {
    
    return (
        <div>
           <table className="table table-borderless">
            <tbody>
            <tr>
            <td>{index +1}</td>
            <td>{order.orders.name}</td>
            <td>{order.orders.email}</td>
            <td>{order.orders.service}</td>
            </tr>
            </tbody>
            </table> 
        </div>
    );
};

export default OrderListTable;