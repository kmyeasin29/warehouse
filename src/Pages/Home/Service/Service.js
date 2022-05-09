import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, name, image, supplier, price, quantity, details } = service;
    const navigate=useNavigate();

    const serviceDetails=id=>{
        navigate(`/ManageItem/${id}`)
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 shadow bg-body rounded'>
        <div className='border'>
            <img src={image} className="card-img-top w-100" alt="..." />
            <div className="card-body">
                <h3 className="card-title text-danger">{name}</h3>
                <p className="card-text">PRICE: ${price}</p>
                <p className="card-text">QUANTITY: {quantity}</p>
                <p className="card-text">SUPPLIER NAME: {supplier}</p>
                <p className="card-text">DESCRIPTION: {details}</p>
                <Link to='/ManageCar'>
                <a href="#" onClick={()=>serviceDetails(_id)} className="btn btn-danger w-100">Manage Stock</a>
                </Link>
            </div>
        </div>
        </div >
    );
};

export default Service;