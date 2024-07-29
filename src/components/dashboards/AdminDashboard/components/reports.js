import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reports.css';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('/api/reports');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="reports-container">
      <h2>View Reports</h2>
      <div className="reports-list">
        {reports.map(report => (
          <div key={report.id} className="report-item">
            <h3>{report.title}</h3>
            <p>{report.summary}</p>
            <button onClick={() => window.open(report.url, '_blank')}>View Full Report</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
