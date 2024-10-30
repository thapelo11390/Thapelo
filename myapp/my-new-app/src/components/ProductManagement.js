// components/ProductManagement.js
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const ProductManagement = ({ products, setProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddOrUpdateProduct = (product) => {
        if (selectedProduct) {
            const updatedProducts = products.map(p => p.id === product.id ? product : p);
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        } else {
            const newProduct = { ...product, id: Date.now() };
            const updatedProducts = [...products, newProduct];
            setProducts(updatedProducts);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
        }
        setSelectedProduct(null);
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter(p => p.id !== id);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const handleAddStock = (id, quantity) => {
        const updatedProducts = products.map(p => {
            if (p.id === id) {
                return { ...p, quantity: p.quantity + quantity };
            }
            return p;
        });
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    const handleSellProduct = (id, quantity) => {
        const updatedProducts = products.map(p => {
            if (p.id === id) {
                return { ...p, quantity: p.quantity - quantity < 0 ? 0 : p.quantity - quantity };
            }
            return p;
        });
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return (
        <div>
            <h1>Product Management</h1>
            <ProductForm selectedProduct={selectedProduct} onSubmit={handleAddOrUpdateProduct} />
            <ProductList 
                products={products} 
                onEdit={handleEditProduct} 
                onDelete={handleDeleteProduct} 
                onAddStock={handleAddStock}
                onSellProduct={handleSellProduct}
            />
        </div>
    );
};

export default ProductManagement;
