import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';

const Inventory = () => {
    const [cars, setCars]=useState([])

    useEffect(()=>{
        fetch('Datas.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div className='conatiner'>
            <h1 className='mt-3 text-center display-5 fw-bold'>Types of Vehicle</h1>
            <h5 className='text-danger text-center'>NEW & USED CARS FOR SALE</h5>
            <div className='row'>
            {
                cars.slice(0,6).map(service=><Service
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Inventory;