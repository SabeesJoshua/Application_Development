import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeDashboard.css';

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const mockTasks = [
      { id: 1, title: 'Complete project report', dueDate: '2024-08-01' },
      { id: 2, title: 'Attend team meeting', dueDate: '2024-07-30' },
      { id: 3, title: 'Update client documentation', dueDate: '2024-07-29' },
    ];
    setTasks(mockTasks);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handleViewTasks = () => {
    navigate('/employee-dashboard/tasks', { state: { tasks } });
  };

  return (
    <div className="employee-dashboard-container">
      <header className="employee-header">
        <h1>Employee Dashboard</h1>
        <button onClick={handleLogout} className="logout-button"><b>Logout</b></button>
      </header>
      <main className="employee-content">
        <h2>Welcome, Employee!</h2>
        <div className="employee-actions">
          <button onClick={handleViewTasks}><b>View Tasks</b></button>
          <button onClick={() => navigate('/employee-dashboard/profile')}><b>View Profile</b></button>
          <button onClick={() => navigate('/employee-dashboard/settings')}><b>Settings</b></button>
        </div>
        <section className="employee-section">
          <h3>Task List</h3>
          <ul>
            {tasks.map(task => (
              <li key={task.id}>
                {task.title} - Due: {task.dueDate}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
