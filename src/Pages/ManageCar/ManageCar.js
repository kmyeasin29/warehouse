import React from 'react';
import useCars from '../Hook/useCars';

const ManageCar = () => {
    const [cars, setCars] = useCars([]);


    // useEffect(() => {
    //     fetch('https://limitless-mesa-13748.herokuapp.com/car')
    //         .then(res => res.json())
    //         .then(data => setCars(data))
    // }, []);

    const habdleDelete=id=>{
        const proceed= window.confirm('Are Sure To Delete?');
        if(proceed){
            const url=`https://limitless-mesa-13748.herokuapp.com/car/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            const remaining=cars.filter(car=>car._id !==id);
            setCars(remaining);
        }
            )
        }

    }
    return (
        <div className='container'>
            <h2 className='text-center text-danger'>Manage Your Items</h2>
            {
                cars.map(car =>
                    <div  key={car._id}>
                        
                        <div className='container mt-3 border d-flex justify-content-between'>
                                <h5 className='w-100'>Brand: {car.name}</h5>
                                <h5 className='w-100'>Price: ${car.price}</h5>
                                <h5 className='w-100'>Quantity: {car.quantity}</h5>
                                <div className='w-100 justify-content-end d-flex'>
                                <button onClick={()=>habdleDelete(car._id)} className='btn btn-danger mx-2'>DELETE</button>
                                <button className='btn btn-success'>UPDATE</button>
                                </div>
                            </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageCar;