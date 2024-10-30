// components/Register.js
import React, { useState } from 'react';

const Register = ({ onRegister, users }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.some(user => user.username === username)) {
            alert('Username already exists. Please choose another.');
            return;
        }
        
        onRegister({ username, password });
        alert('Registration successful! You can now log in.');
        setUsername('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
