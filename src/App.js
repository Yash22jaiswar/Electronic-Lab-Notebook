import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';
import ProjectsPage from './components/ProjectsPage';
import EntriesPage from './components/EntriesPage';
import SampleManagementPage from './components/SampleManagementPage';
import ReportsPage from './components/ReportsPage';
import DashboardsPage from './components/DashboardsPage';
import ReagentsPage from './components/ReagentsPage';
import PrimersPage from './components/PrimersPage';
import OligosPage from './components/OligosPage';
import TasksPage from './components/TasksPage';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/entries" element={<EntriesPage />} />
          <Route path="/sample-management" element={<SampleManagementPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/dashboards" element={<DashboardsPage />} />
          <Route path="/reagents" element={<ReagentsPage />} />
          <Route path="/primers" element={<PrimersPage />} />
          <Route path="/oligos" element={<OligosPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
