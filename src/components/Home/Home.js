import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //DELETE AN Products
    const handleDeleteUser = id => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted successfully');
                    const remainingProducts = products.filter(product => product._id !== id);
                    setProducts(remainingProducts);
                }
            })
    }
    return (
        <div>
            <h2 className='text-center my-5'>Products Vailable : {products.length}</h2>
            <div className="row container">
                {
                    products.map(product =>

                        < div className="col-lg-3 border border ms-5 my-3" >
                            <div className="container">
                                <h4>{product.name}</h4>
                                <p>{product.name}</p>
                                <h6>{product.price}</h6>
                                <Button onClick={() => handleDeleteUser(product._id)} variant="danger">Delete</Button>
                                <Button className='ms-5' variant="success">Update</Button>
                            </div>

                        </div>
                    )
                }
            </div>

        </div >
    );
};

export default Home;