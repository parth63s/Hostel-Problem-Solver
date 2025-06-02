import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import NavBar from '../NavBar';
import Footer from '../Footer';

function LoginPage() {
    return ( 
        <div style={{background:"#FAF7F0"}} >
            <NavBar/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default LoginPage;
