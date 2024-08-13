import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../styles/Signup.css';
import img5 from '../assets/img5.png';
import Navbar from './Navbar';
import Footer from './Footer';

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    company: '',
    role: '', 
  });

  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setForm({ ...form, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      nav('/login');
    } catch (error) {
      setError(error.response?.data || 'An error occurred. Please try again.');
      console.error(error.response?.data || error.message);
    }
  };  


  return (
    <>
    <Navbar/>
    <div className='container1'>
      <div className='image-container1'>
        <img src={img5} alt="Logo" />
      </div>
      <div className='form-container1'>
        <form className='form21' onSubmit={handleSubmit}><br/>
          <h4 className='head1'><b>Sign Up</b></h4>
          <label>First Name:</label>
          <input
            type='text'
            name="firstName"
            variant='outlined'
            placeholder="Your First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <label>Last Name:</label>
          <input
            type='text'
            name="lastName"
            variant='outlined'
            placeholder="Your Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <label>Username:</label>
          <input
            name='username'
            type='text'
            variant='outlined'
            placeholder="Your User Name"
            value={form.username}
            onChange={handleChange}
            required
          />
          <label>Company:</label>
          <input
            name='company'
            type='text'
            variant='outlined'
            placeholder="Your Company Name"
            value={form.company}
            onChange={handleChange}
            required  
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            variant='outlined'
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            variant='outlined'
            placeholder="Enter Password Here"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label>Role:</label>
          <TextField
            name="role"
            select
            variant="outlined"
            required
            value={form.role}
            onChange={handleRoleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="team_lead">Team Lead</MenuItem>
            <MenuItem value="product_manager">Product Manager</MenuItem>
          </TextField>
          <button type='submit' className='button111'><b>Signup</b></button>
          <br />
          <p>Already have an Account?<br/> <Link to='/login' className='l111'><b>Log In</b></Link></p>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default SignUp;
