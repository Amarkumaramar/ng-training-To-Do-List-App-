
import React from 'react';
import './Navbar.js';

const Navbar = ({ taskCount, handleNewTask, handleRefresh }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <i className='logo' class="fa-solid fa-list-check"></i>
        <span className="logo">Tasks<br/></span>
        <span className="task-count">{taskCount} records</span>
      </div>
      <div className="button-search-container">
        <div className="button-container">
          <button className="new-task-btn" onClick={handleNewTask}>New Task</button>
          <button className="refresh-btn" onClick={handleRefresh}>Refresh</button>
        </div>
        <input type="text" className="search-bar" placeholder="Search tasks..." />
      </div>
    </nav>
  );
};

export default Navbar;
