// import React from 'react'
// import { Link } from 'react-router-dom';
// function Login (){
//   return (
//     <div>
//         <div className="form">
//           <form>
//               <h2 className='sig'>LogIn</h2>
//               <label>Username:</label>
//               <input type="email" name="email" placeholder="Enter Email Here" /><br></br>
//               <label>Password:</label>
//               <input type="password"  name="pass" placeholder="Enter Password Here" /><br></br>
//               <Link to='' className='l'><button className='bt'><b>Login</b></button></Link>
//               <br></br>
//               <p>Don't have an Account ?<Link to='/signup' className='l' > <b>Sign Up</b></Link></p>
//               <Link className='l'><b>Forgot password?</b></Link>
//           </form>
//         </div>
//     </div>
//   )
// }

// export default Login;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2 className='sig'>LogIn</h2>
          <label>Username:</label>
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
          <Link className='l'><b>Forgot password?</b></Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
