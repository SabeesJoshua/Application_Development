import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const mockProjects = [
      { id: 1, title: 'Project Alpha', dueDate: '2024-08-01' },
      { id: 2, title: 'Project Beta', dueDate: '2024-07-30' },
      { id: 3, title: 'Project Gamma', dueDate: '2024-07-29' },
    ];
    setProjects(mockProjects);
  }, []);

  return (
    <div className="projects-container">
      <h3>Project List</h3>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.title} - Due: {project.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
