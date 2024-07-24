// import React from 'react'
// import { Link } from 'react-router-dom';
// function Signup() {
//   return (
//     <div>
//       <form className='form2'>
//                 <h2 className='head'>Sign Up</h2>
//                 <label>First Name:</label>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <input type='text' name="fname" placeholder="Your First Name"/>
//                 <br></br>
//                 <label>Last Name:</label>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <input type='text' name="lname" placeholder="Your Last Name"/>
//                 <br></br>
//                 <label>Phone Number:</label>
//                 <input type="text" name='number' maxlength="10" placeholder="Enter your number"/>
//                 <br></br>
//                 <label>Email:</label>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <input type="email" name="email" placeholder="Enter your Email" />
//                 <br></br>
//                 <label>Password:</label>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <input type="password" name="pass" placeholder="Enter Password Here" />
//                 <br></br>
//                 <Link to='/' className='l'><button className='button'><b>Signup</b></button></Link>
//                 <br></br>
//                 <p>Already have an Account ?<Link to='/' className='l'><b> Log In</b></Link></p>
//             </form>
//     </div>
//   )
// }

// export default Signup;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    number: '',
    email: '',
    pass: ''
  });

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
    // Add form submission logic here
  };

  return (
    <div>
      <form className='form2' onSubmit={handleSubmit}>
        <h2 className='head'>Sign Up</h2>
        <label>First Name:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type='text'
          name="fname"
          placeholder="Your First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <br />
        <label>Last Name:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type='text'
          name="lname"
          placeholder="Your Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <br />
        <label>Phone Number:</label>
        <input
          type="text"
          name='number'
          maxLength="10"
          placeholder="Enter your number"
          value={formData.number}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <p>Already have an Account? <Link to='/'> <b>Log In</b> </Link></p>
      </form>
    </div>
  );
}

export default Signup;
