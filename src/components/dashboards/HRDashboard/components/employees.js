import React from 'react';
import { useLocation } from 'react-router-dom';
import './employees.css';

const Employees = () => {
  const location = useLocation();
  const employees = location.state?.employees || [];

  return (
    <div className="employees-container">
      <h3>Employee List</h3>
      <ul>
        {employees.length > 0 ? (
          employees.map(employee => (
            <li key={employee.id}>
              {employee.name} - {employee.position}
            </li>
          ))
        ) : (
          <li>No employees available.</li>
        )}
      </ul>
    </div>
  );
};

export default Employees;
