import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HRDashboard.css';

const HRDashboard = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const mockEmployees = [
      { id: 1, name: 'John Doe', position: 'Software Engineer' },
      { id: 2, name: 'Jane Smith', position: 'Product Manager' },
      { id: 3, name: 'Samuel Green', position: 'Designer' },
    ];
    setEmployees(mockEmployees);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="hr-dashboard-container">
      <header className="hr-header">
        <h1>HR Dashboard</h1>
        <button onClick={handleLogout} className="logout-button"><b>Logout</b></button>
      </header>
      <main className="hr-content">
        <h2>Welcome, HR!</h2>
        <div className="hr-actions">
          <button onClick={() => navigate('/hr-dashboard/employees')}><b>View Employees</b></button>
          <button onClick={() => navigate('/hr-dashboard/profile')}><b>View Profile</b></button>
          <button onClick={() => navigate('/hr-dashboard/settings')}><b>Settings</b></button>
        </div>
        <section className="hr-section">
          <h3>Employee List</h3>
          <ul>
            {employees.map(employee => (
              <li key={employee.id}>
                {employee.name} - {employee.position}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HRDashboard;
