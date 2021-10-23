import React, { useRef, useState } from 'react';
import { Alert, FloatingLabel, Form } from 'react-bootstrap';

const AddProduct = () => {
    const [displayMessage, setDisplayMessage] = useState(false);
    const nameRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();

    const handleAddProduct = () => {
        setDisplayMessage(false);
        const name = nameRef.current.value;
        const desc = descRef.current.value;
        const price = priceRef.current.value;

        const newProduct = { name, desc, price };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newProduct),

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    setDisplayMessage(true);


                    // alert('product added successfully');

                    //e.target.reset();
                }

            })
    }
    return (
        <div>
            <h2 className='text-center fw-bold my-5 fs-1'>Add Your Favorite Product</h2>
            <div className='container'>
                <div >
                    {
                        displayMessage && <Alert variant={'success'}>
                            This is a alert—check it out!
                        </Alert>
                    }
                    <FloatingLabel
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" ref={nameRef} placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel type="text" ref={descRef} label="Description">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <FloatingLabel className='mt-3' label="Price">
                        <Form.Control ref={priceRef} type="text" placeholder="Price" />
                    </FloatingLabel>
                    <button onClick={handleAddProduct} className='btn btn-danger mt-3' value="AddProduct" >Add P</button>
                    {/* <div className="btn btn-danger mt-3">AddProduct</div> */}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;