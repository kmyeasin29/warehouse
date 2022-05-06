import React from 'react';

const Service = ({ service }) => {
    const { name, image, supplier, price, quantity, details } = service;

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
                <a href="#" className="btn btn-danger">Manage Stock</a>
            </div>
        </div>
        </div >
    );
};

export default Service;