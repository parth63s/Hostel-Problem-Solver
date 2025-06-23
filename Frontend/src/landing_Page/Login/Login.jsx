import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '', role: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

   const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', form, {

         withCredentials: true, 
          headers: {
            'Content-Type': 'application/json'
          }
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data.message);

        setTimeout(() => {
          if (response.data.role === 'student') {
            navigate('/studentPanel');
          } else if (response.data.role === 'worker') {
            navigate('/workerPanel');
          } else {
            navigate('/wardenPanel');
          }
        }, 2000);
      
        
      }
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message || 'Login failed');
      } else {
        alert('Server error. Please try again.');
      }
    }
  };


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder="Email" className="form-control mb-3" required onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" className="form-control mb-3" required onChange={handleChange} />
              <select name="role" className="form-select mb-3" required onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="warden">Warden</option>
                <option value="worker">Worker</option>
              </select>
              <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Login</button>
            </form>
            <p className="text-center mt-3">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
