import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeamLeadDashboard.css';

const TeamLeaderDashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const mockProjects = [
      { id: 1, title: 'Project Alpha', dueDate: '2024-08-01' },
      { id: 2, title: 'Project Beta', dueDate: '2024-07-30' },
      { id: 3, title: 'Project Gamma', dueDate: '2024-07-29' },
    ];
    setProjects(mockProjects);
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="team-leader-dashboard-container">
      <header className="team-leader-header">
        <h1>Team Leader Dashboard</h1>
        <button onClick={handleLogout} className="logout-button"><b>Logout</b></button>
      </header>
      <main className="team-leader-content">
        <h2>Welcome, Team Leader!</h2>
        <div className="team-leader-actions">
          <button onClick={() => navigate('/team-leader-dashboard/projects')}><b>View Projects</b></button>
          <button onClick={() => navigate('/team-leader-dashboard/profile')}><b>View Profile</b></button>
          <button onClick={() => navigate('/team-leader-dashboard/settings')}><b>Settings</b></button>
        </div>
        <section className="team-leader-section">
          <h3>Project List</h3>
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                {project.title} - Due: {project.dueDate}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TeamLeaderDashboard;
