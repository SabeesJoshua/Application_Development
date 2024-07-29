import React, { useState } from 'react';
import './settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: 'Light',
    notifications: true,
    dataRefreshInterval: 15,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div className="settings-container">
      <h2>Settings:</h2>
      <div className="settings-form">
        <div className="form-group">
          <label htmlFor="theme">Theme:</label>
          <select name="theme" value={settings.theme} onChange={handleInputChange}>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notifications">Notifications:</label>
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dataRefreshInterval">Data Refresh Interval (minutes):</label>
          <input
            type="number"
            name="dataRefreshInterval"
            value={settings.dataRefreshInterval}
            onChange={handleInputChange}
            min="1"
            max="60"
          />
        </div>
        <button onClick={handleSave} className="save-button">Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
