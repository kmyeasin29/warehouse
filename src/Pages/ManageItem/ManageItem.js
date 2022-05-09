import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ManageItem = () => {
    const {carId}=useParams();
    const [car, setCar]=useState({});

useEffect(()=>{
   const  url=`https://limitless-mesa-13748.herokuapp.com/car/${carId}`;
   fetch(url)
   .then(res=>res.json())
   .then(data=>setCar(data))
},[])

    return (
        <div>
            <h2 className='text-center text-danger'>Manage Item: {carId}</h2>
            <div className="text-center">
                <Link to='/AddItem'>
                <button className='btn btn-danger'>Add Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ManageItem;