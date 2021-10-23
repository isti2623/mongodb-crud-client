import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    // Update User
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, description: user.description, price: user.price };
        setUser(updatedUser);
    }

    const handleDescriptionChange = e => {
        const updatedDescription = e.target.value;
        const updatedUser = { name: user.name, description: updatedDescription, price: user.price };
        setUser(updatedUser);
    }
    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedUser = { name: user.name, description: user.description, price: updatedPrice };
        setUser(updatedUser);
    }
    const handleUpdateUser = e => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUser({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Update: {user.name}</h2>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <input type="text" onChange={handleDescriptionChange} value={user.description || ''} />
                <input type="text" onChange={handlePriceChange} value={user.price || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;