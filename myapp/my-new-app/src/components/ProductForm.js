// components/ProductForm.js
import React, { useState, useEffect } from 'react';

const ProductForm = ({ selectedProduct, onSubmit }) => {
    const [product, setProduct] = useState({ productName: '', productDescription: '', productCategory: '', productPrice: '', quantity: 0 });

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            setProduct({ productName: '', productDescription: '', productCategory: '', productPrice: '', quantity: 0 });
        }
    }, [selectedProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Product Name"
                value={product.productName}
                onChange={e => setProduct({ ...product, productName: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={product.productDescription}
                onChange={e => setProduct({ ...product, productDescription: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={product.productCategory}
                onChange={e => setProduct({ ...product, productCategory: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={product.productPrice}
                onChange={e => setProduct({ ...product, productPrice: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Initial Quantity"
                value={product.quantity}
                onChange={e => setProduct({ ...product, quantity: e.target.value })}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;
