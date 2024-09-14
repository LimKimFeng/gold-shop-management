import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/login", {
                username,
                password,
            });
            if (response.data.role === 'Pegawai' || response.data.role === 'Admin') {
                console.log("Redirect to Pegaiwai/Admin Dashboard");
                navigate('/dashboard');
            } else {
                setError("Who are you?");
            }
        } catch (error) {
            setError("Invalid username or password. Please try again.")
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
                {error && <p className="bg-red-200 text-red-800 p-2 rounded mb-4">{error}</p>}
                <form method="post" onSubmit={handleLogin}>
                    {/* username */}
                    <InputField id="username" label="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {/* password */}
                    <InputField id="password" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className="flex items-center justify-between">
                        <input type="submit" value="Login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;