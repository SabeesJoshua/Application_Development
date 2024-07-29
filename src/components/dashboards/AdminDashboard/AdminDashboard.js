import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={handleLogout} className="logout-button"><b>Logout</b></button>
      </header>
      <main className="admin-content">
        <h2>Welcome, Admin!</h2>
        <div className="admin-actions">
          <button onClick={() => navigate('/admin-dashboard/users')}><b>Manage Users</b></button>
          <button onClick={() => navigate('/admin-dashboard/reports')}><b>View Reports</b></button>
          <button onClick={() => navigate('/admin-dashboard/settings')}><b>Settings</b></button>
        </div>
        <section className="admin-section">
          <h3>Users List</h3>
          <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
