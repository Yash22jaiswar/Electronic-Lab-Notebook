import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation-bar">
      <div className="navbar-header">
        <button className="navbar-toggle" onClick={handleToggle}>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
          <span className="toggle-icon"></span>
        </button>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/entries">Entries</Link>
        </li>
        <li>
          <Link to="/sample-management">Sample Management</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/dashboards">Dashboards</Link>
        </li>
        <li>
          <Link to="/reagents">Reagents</Link>
        </li>
        <li>
          <Link to="/primers">Primers</Link>
        </li>
        <li>
          <Link to="/oligos">Oligos</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
