import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/signup.css';
import img5 from '../assets/img5.png';

function SignUp() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    alert('Account successfully created');
    
    navigate('/');
  };

  return (
    <div className='container'>
      <div className='image-container'>
        <img src={img5} alt="Logo" />
      </div>
      <div className='form-container'>
        <form className='form2' onSubmit={handleSubmit}>
          <h2 className='head'>Sign Up</h2>
          <label>First Name:</label>
          <input
            type='text'
            name="fname"
            placeholder="Your First Name"
            value={formData.fname}
            onChange={handleChange}
          />
          <br />
          <label>Last Name:</label>
          <input
            type='text'
            name="lname"
            placeholder="Your Last Name"
            value={formData.lname}
            onChange={handleChange}
          />
          <br />
          <label>Username:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="pass"
            placeholder="Enter Password Here"
            value={formData.pass}
            onChange={handleChange}
          />
          <br />
          <button type='submit' className='button'><b>Signup</b></button>
          <br />
          <p>Already have an Account? <Link to='/login' className='l'><b>Log In</b></Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
