import React, { useEffect, useState } from 'react';

const Inventory = () => {
    const [cars, setCars]=useState([])

    useEffect(()=>{
        fetch('Datas.json')
        .then(res=>res.json())
        .then(data=>setCars(data))
    },[])
    return (
        <div>
            <h2>Inventory page: {cars.length}</h2>
        </div>
    );
};

export default Inventory;