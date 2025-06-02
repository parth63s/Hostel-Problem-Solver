import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', role: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Registering:', form);
    // TODO: Call backend register API
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Registration</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" className="form-control mb-3" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" className="form-control mb-3" required onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" className="form-control mb-3" required onChange={handleChange} />
              <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-3" required onChange={handleChange} />
              <select name="role" className="form-select mb-3" required onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="plumber">Student</option>
                <option value="carpenter">Warden</option>
                <option value="electrician">Worker</option>
              </select>
              <button type="submit" className="btn btn-success w-100">Register</button>
            </form>
            <p className="text-center mt-3">
              Already have an account? <a href="/">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
