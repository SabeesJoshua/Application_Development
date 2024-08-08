import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import '../styles/login.css';
import img3 from '../assets/img3.png';

function LogIn({ onLogin }) {
  const [formData, setForm] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username: formData.username,
        password: formData.password,
      });
      const userInfo = response.data;
      console.log("User Info:", userInfo); 

      const expirationTime = new Date().getTime() + 5000;
  
      localStorage.setItem('username', formData.username);
      localStorage.setItem('expiration', expirationTime);
      localStorage.setItem('role', userInfo.role);
      localStorage.setItem('id', userInfo.id);
      localStorage.setItem('data', JSON.stringify(userInfo));
      console.log("Expiration Time:", expirationTime);
      console.log("Expiration Time:", localStorage.getItem('expiration'));
  
      onLogin(userInfo);
      // Handle role as a single string rather than an array
      switch (userInfo.role) {  // Adjusted for single role string
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
          break;
        case 'team_lead':
          navigate('/team-lead-dashboard');
          break;
        case 'product_manager':
          navigate('/product-manager-dashboard');
          break;
        default:
          navigate('/');
      } 
    } catch (err) {
      console.error("Login Error:", err); // Log error for debugging
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='login'>
      <img src={img3} alt="Logo" className='im' />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2 className='sig'>Log In</h2>
          {/* <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            value={formData.email}
            onChange={handleChange}
            required
          /><br /> */}
          <label>Username:</label>
          <input
            name='username' 
            type='text' 
            variant='outlined' 
            placeholder='Enter Username Here'
            value={formData.username} 
            onChange={handleChange} 
            required 
          /><br/>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            variant='outlined' 
            placeholder="Enter Password Here"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {/* <label>Role:</label>
          <TextField
            name="role"
            select
            variant="outlined"
            required
            value={formData.role}
            onChange={handleChange}
            fullWidth
            margin="normal" 
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="team_lead">Team Lead</MenuItem>
            <MenuItem value="product_manager">Product Manager</MenuItem>
          </TextField> */}
          <button className='bt' type='submit'><b>Login</b></button>
          <br />
          <p>Don't have an Account? <Link to='/signup' className='l'><b>Sign Up</b></Link></p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
