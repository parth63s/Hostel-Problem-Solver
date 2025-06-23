import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', phone: '', role: '', room: '', hostel: '', workType: '' });
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent page refresh

    // try {
      const response = await axios.post("http://localhost:8080/signup", form, {
        withCredentials: true
      });

      setSuccess("User registered successfully!");
      setError(""); // Clear errors on success

      setTimeout(() => {
        if (response.data === 'student') {
          navigate('/studentPanel');
        } else if (response.data === 'worker') {
          navigate('/workerPanel');
        } else {
          navigate('/wardenPanel');
        }
      }, 2000);
    // } catch (err) {
    //   setError(err.response?.data?.error || "Signup failed. Please try again.");
    //   setSuccess(""); // Clear success message on error
    // }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h3 className="text-center mb-4">Registration</h3>

            {/* ✅ Show messages */}
            {success && <div className="alert alert-success">{success}</div>}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Full Name" className="form-control mb-3" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" className="form-control mb-3" required onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" className="form-control mb-3" required onChange={handleChange} />
              <input type="text" name="phone" placeholder="Phone Number" className="form-control mb-3" required onChange={handleChange} />

              <select name="role" className="form-select mb-3" required onChange={handleChange}>
                <option value="">Select Role</option>
                <option value="student">Student</option>
                <option value="warden">Warden</option>
                <option value="worker">Worker</option>
              </select>

              {form.role === 'student' && (
                <>
                  <input type="text" name="hostel" placeholder="Hostel Name" className="form-control mb-3" required onChange={handleChange} />
                  <input type="text" name="room" placeholder="Room Number" className="form-control mb-3" required onChange={handleChange} />
                </>
              )}

              {form.role === 'warden' && (
                <input type="text" name="hostel" placeholder="Hostel In-charge Of" className="form-control mb-3" required onChange={handleChange} />
              )}

              {form.role === 'worker' && (
                <select name="workType" className="form-select mb-3" required onChange={handleChange}>
                  <option value="">Select Work Type</option>
                  <option value="plumber">Plumber</option>
                  <option value="carpenter">Carpenter</option>
                  <option value="electrician">Electrician</option>
                </select>
              )}

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
