import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../styles/login.css';
import img3 from '../assets/img3.png';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (role) {
      case 'Admin':
        navigate('/admin-dashboard');
        break;
      case 'Employee':
        navigate('/employee-dashboard');
        break;
      case 'HR':
        navigate('/hr-dashboard');
        break;
      case 'Team_Lead':
        navigate('/team-leader-dashboard');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className='login'>
      <img src={img3} alt="Logo" className='im' />
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2 className='sig'>Log In</h2>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <label>Password:</label>
          <input
            type="password"
            name="pass"
            placeholder="Enter Password Here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button className='bt' type='submit'><b>Login</b></button>
          <br />
          <p>Don't have an Account? <Link to='/signup' className='l'><b>Sign Up</b></Link></p>
          <Link to='/forgot-password' className='l'><b>Forgot password?</b></Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
