// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import MenuItem from '@mui/material/MenuItem';
// import '../styles/signup.css';
// import img5 from '../assets/img5.png';

// function SignUp() {
//   const [formData, setFormData] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     pass: '',
//     role: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     const userExists = users.find(user => user.email === formData.email);
//     if (userExists) {
//       alert('Email already exists. Please use a different email.');
//       return;
//     }

//     users.push(formData);
//     localStorage.setItem('users', JSON.stringify(users));

//     alert('Account successfully created');

//     navigate('/login');
//   };

//   return (
//     <div className='container'>
//       <div className='image-container'>
//         <img src={img5} alt="Logo" />
//       </div>
//       <div className='form-container'>
//         <form className='form2' onSubmit={handleSubmit}>
//           <h2 className='head'>Sign Up</h2>
//           <label>First Name:</label>
//           <input
//             type='text'
//             name="fname"
//             placeholder="Your First Name"
//             value={formData.fname}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <label>Last Name:</label>
//           <input
//             type='text'
//             name="lname"
//             placeholder="Your Last Name"
//             value={formData.lname}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <label>Password:</label>
//           <input
//             type="password"
//             name="pass"
//             placeholder="Enter Password Here"
//             value={formData.pass}
//             onChange={handleChange}
//             required
//           />
//           <br />
//           <label>Role:</label>
//           <TextField
//             name="role"
//             select
//             variant="outlined"
//             required
//             value={formData.role}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           >
//             <MenuItem value="admin">Admin</MenuItem>
//             <MenuItem value="employee">Employee</MenuItem>
//             <MenuItem value="team_lead">Team Lead</MenuItem>
//             <MenuItem value="product_manager">Product Manager</MenuItem>
//           </TextField>
//           <button type='submit' className='button'><b>Signup</b></button>
//           <br />
//           <p>Already have an Account? <Link to='/login' className='l'><b>Log In</b></Link></p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../styles/signup.css';
import img5 from '../assets/img5.png';

function SignUp() {
  const [formData, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    company: '',
    role: '', 
  });

  const [ error,setError] = useState(null);
  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setForm({ ...formData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      nav('/login');
    } catch (error) {
      alert("error occured");
      setError(error.response?.data || 'An error occurred. Please try again.');
      console.error(error.response?.data || error.message);
    }

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
            name="firstName"
            placeholder="Your First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <br />
          <label>Last Name:</label>
          <input
            type='text'
            name="lastName"
            placeholder="Your Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <br />
          <label>Username:</label>
          <input
            name='username'
            type='text'
            placeholder="Your User Name"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <br />
          <label>Company:</label>
          <input
            name='company'
            type='text'
            placeholder="Your Company Name"
            value={formData.company}
            onChange={handleChange}
            required  
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            name="pass"
            placeholder="Enter Password Here"
            value={formData.pass}
            onChange={handleChange}
            required
          />
          <br />
          <label>Role:</label>
          <TextField
            name="role"
            select
            variant="outlined"
            required
            value={formData.role}
            onChange={handleRoleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="team_lead">Team Lead</MenuItem>
            <MenuItem value="product_manager">Product Manager</MenuItem>
          </TextField>
          <button type='submit' className='button'><b>Signup</b></button>
          <br />
          <p>Already have an Account? <Link to='/login' className='l'><b>Log In</b></Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
