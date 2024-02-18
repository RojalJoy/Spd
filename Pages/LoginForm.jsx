import React, { useState, useEffect } from 'react';
import { firestore } from "./fire.js";
import { collection, getDocs } from "@firebase/firestore";
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const customerCollectionRef = collection(firestore, "customer");
            const dataSnapshot = await getDocs(customerCollectionRef);
            const newData = [];
            dataSnapshot.forEach(doc => {
                newData.push({ id: doc.id, ...doc.data() });
            });
            setCustomerData(newData);
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect only runs once

    const handleLogin = (e) => {
        e.preventDefault();
        const foundCustomer = customerData.find(customer => customer.username === username && customer.password === password);
        if (foundCustomer) {
            setLoggedIn(true);
            setErrorMessage('');
        } else {
            setLoggedIn(false);
            setErrorMessage('Invalid username or password.');
        }
    };
    const navigate = useNavigate();
<button onClick={() => navigate('/Register')}>Register</button>

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
        setErrorMessage('');
    };

    if (loggedIn) {
        return (
            <div>
                <h1>Welcome, {username}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }
    

    return (
        <div>
            <h1>Login</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
                
                <button onClick={() => navigate('/Register')}>Register</button> {/* Add the register button */}
            </form>
        </div>
    );
}
