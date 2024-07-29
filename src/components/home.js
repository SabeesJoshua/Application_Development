import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import img2 from '../assets/img2.png';

const H = () => {
  const [user, setUser] = useState(null);
  const [step, setStep] = useState('selectRole');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login', { state: { role: selectedRole } });
  };

  // const handleLogout = () => {
  //   setUser(null);
  //   setStep('selectRole');
  //   navigate('/');
  // };

  const handleBack = () => {
    setUser(null);
    setStep('selectRole');
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setStep('dashboard');
  };

  return (
    <div className="home-container">
      <img src={img2} alt="Logo" />
      <div className='c1'>
        <h1 className='h1'>Effortless Staff Scheduling with <b>WorkForce...</b></h1>
        <h1>Welcome {user ? user.role : 'Guest'}</h1>
        {step === 'selectRole' ? (
          <div>
            <p>Please select your role to login:</p>
            <button onClick={() => handleRoleSelection('Admin')}><b>Admin</b></button>
            <button onClick={() => handleRoleSelection('Employee')}><b>Employee</b></button>
            <button onClick={() => handleRoleSelection('HR')}><b>HR</b></button>
            <button onClick={() => handleRoleSelection('Team_Lead')}><b>Team Lead</b></button>
          </div>
        ) : (
          <div className="user-actions">
            <button onClick={handleLogin}><b>Go to your dashboard</b></button>
            <button onClick={handleBack}><b>Back</b></button>
            {/* <button onClick={handleLogout}>Logout</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default H;
