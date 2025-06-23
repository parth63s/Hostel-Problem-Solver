import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function LoginPage() {
    return ( 
        <div style={{background:"#FAF7F0"}} >
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default LoginPage;
