import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import img3 from '../assets/img3.png';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username: form.username,
        password: form.password,
      });
  
      const { token, user } = response.data;
  
      const expirationTime = new Date().getTime() + 5000000;

      localStorage.setItem('username', user.username);
      localStorage.setItem('expiration', expirationTime);
      localStorage.setItem('role', user.role);
      localStorage.setItem('id', user.id);
      localStorage.setItem('data', JSON.stringify(user));
      localStorage.setItem('token', token);

      onLogin(user);
  
      switch (user.role) {
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
      console.error("Login Error:", err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };
  
  return (
    <div className='Login'>
      <Navbar />
      <div className='login'>
        <div className='login-container'>
          <div className='im'>
            <img src={img3} alt="Illustration" />
          </div>
          <div className='form'>
            <div className='sig'><br/>
              <h4><b>Log In</b></h4>
            </div>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input name='username' placeholder='Enter Username Here' variant='outlined' type='text' value={form.username} onChange={handleChange} required />
              <label>Password</label>
              <input name='password' placeholder='Enter Password Here' variant='outlined' type='password' value={form.password} onChange={handleChange} required />
              <button type="submit" className="bt"><b>Login</b></button>
              <p>
                Don't have an account?{' '}
                <span className="l" onClick={() => navigate('/signup')}>
                  <b>Sign Up</b>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

