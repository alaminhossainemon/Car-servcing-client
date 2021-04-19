import React from 'react';

const MangeServiceTable = ({service,index}) => {
    const {_id,name} = service;
    const deleteProduct = id =>{
        console.log(id);
        const url =`http://localhost:4000/deleteService/${_id}`;
        fetch(url,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => console.log('Success', result));
    }
    return (
        <div>
            <table className="table table-borderless">
            <tbody>
            <tr>
            <td>{index +1}</td>
            <td>{name}</td>
            <td><button className="btn btn-danger" onClick={()=>deleteProduct(_id)}>Delete</button></td>
            </tr>
            </tbody>
            </table>
        </div>
    );
};

export default MangeServiceTable;