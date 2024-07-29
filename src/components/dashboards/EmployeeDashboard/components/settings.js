import React from 'react';
import { useNavigate } from 'react-router-dom';
import './settings.css';

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1>Settings</h1>
        <button onClick={handleLogout} className="logout-button"><b>Logout</b></button>
      </header>
      <main className="settings-content">
        <form className="settings-form">
          <label>
            <span>Change Password</span>
            <input type="password" placeholder="New Password" />
          </label>
          <label>
            <span>Notification Preferences</span>
            <select>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="push">Push Notifications</option>
            </select>
          </label>
          <button type="submit"><b>Save Changes</b></button>
        </form>
      </main>
    </div>
  );
};

export default Settings;
