import React, { useState } from 'react';

const UserManagement = ({ users, setUsers, onLogin }) => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [isRegistering, setIsRegistering] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        if (isRegistering) {
            if (users.some(u => u.username === user.username)) {
                setMessage("Username already exists.");
                setLoading(false);
                return;
            }
            setUsers([...users, user]);
            setMessage("Registration successful!");
            setIsRegistering(false);
        } else {
            const existingUser = users.find(u => u.username === user.username && u.password === user.password);
            if (existingUser) {
                onLogin(existingUser);
                setMessage("Login successful!");
            } else {
                setMessage("Invalid credentials");
            }
        }

        setUser({ username: '', password: '' });
        setLoading(false);
    };

    return (
        <div>
            <h1>Wings Cafe</h1> {/* Cafe heading */}
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : (isRegistering ? 'Register' : 'Login')}
                </button>
            </form>
            {message && <p>{message}</p>} {/* Display message for actions */}
            <button onClick={() => setIsRegistering(!isRegistering)}>
                Switch to {isRegistering ? 'Login' : 'Register'}
            </button>
        </div>
    );
};

export default UserManagement;
