import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    const [car, setCar] = useState();

    useEffect(() => {
        const url = `https://limitless-mesa-13748.herokuapp.com/car/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, []);

    const handleProductUpdate = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;

        const url = `https://limitless-mesa-13748.herokuapp.com/car/${id}`;

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                name, price, quantity, image
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((json) => console.log(json));
    }
    return (
        <div className='w-50 mx-auto p-2'>
            <h2 className='text-center text-danger mt-2 display-4'>Update Your Item</h2>
            <form className='container' onSubmit={handleProductUpdate}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Brand</label>
                    <input type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" name="price" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Quantity</label>
                    <input type="text" name="quantity" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Upload Image</label>
                    <input type="text" name="image" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-danger w-100">Update Item</button>
            </form>
        </div>
    );
};

export default UpdateItem;