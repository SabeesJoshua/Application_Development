import React from 'react';
import { useLocation } from 'react-router-dom';
import './task.css';

const Tasks = () => {
  const location = useLocation();
  const tasks = location.state?.tasks || [];

  return (
    <div className="tasks-container">
      <h3>Task List</h3>
      <ul>
        {tasks.length > 0 ? (
          tasks.map(task => (
            <li key={task.id}>
              {task.title} - Due: {task.dueDate}
            </li>
          ))
        ) : (
          <li>No tasks available.</li>
        )}
      </ul>
    </div>
  );
};

export default Tasks;
