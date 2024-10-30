// components/Dashboard.js
import React from 'react';

const Dashboard = ({ products }) => {
    const totalStock = products.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Total Products in Stock: {totalStock}</h2>
        </div>
    );
};

export default Dashboard;
