// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import UserManagement from './components/UserManagement';
import './App.css';

const App = () => {
    const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')) || []);
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
    const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem('currentUser')) || null);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleLogin = (user) => {
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    };

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    };

    return (
        <Router>
            <div className="container">
                <Navbar onLogout={handleLogout} />
                {currentUser ? (
                    <Routes>
                        <Route path="/" element={<Dashboard products={products} />} />
                        <Route path="/products" element={<ProductManagement products={products} setProducts={setProducts} />} />
                        <Route path="/users" element={<UserManagement users={users} setUsers={setUsers} onLogin={handleLogin} />} />
                    </Routes>
                ) : (
                    <UserManagement users={users} setUsers={setUsers} onLogin={handleLogin} />
                )}
            </div>
        </Router>
    );
};

export default App;
