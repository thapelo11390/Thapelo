// components/ProductList.js
import React from 'react';

const ProductList = ({ products, onEdit, onDelete, onAddStock, onSellProduct }) => {
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <span>{product.productName} - Quantity: {product.quantity}</span>
                        <button onClick={() => onEdit(product)}>Edit</button>
                        <button onClick={() => onDelete(product.id)}>Delete</button>
                        <button onClick={() => {
                            const quantity = parseInt(prompt("Enter quantity to add:"));
                            if (quantity > 0) onAddStock(product.id, quantity);
                        }}>Add Stock</button>
                        <button onClick={() => {
                            const quantity = parseInt(prompt("Enter quantity to sell:"));
                            if (quantity > 0) onSellProduct(product.id, quantity);
                        }}>Sell</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
