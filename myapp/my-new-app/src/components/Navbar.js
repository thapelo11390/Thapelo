// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/products">Product Management</Link></li>
                <li><Link to="/users">User Management</Link></li>
                <li><button onClick={onLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
