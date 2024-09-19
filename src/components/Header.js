import React, { useState } from 'react';

const Header = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Display
          <span className="arrow-down"></span>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <label>Grouping</label>
              <select value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <label>Ordering</label>
              <select value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .header {
          background-color: white;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .dropdown {
          position: relative;
          display: inline-block;
        }
        .dropdown-toggle {
          background-color: white;
          border: 1px solid #ddd;
          padding: 0.5rem 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .arrow-down {
          border: solid black;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(45deg);
          margin-left: 5px;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border: 1px solid #ddd;
          padding: 0.5rem;
          z-index: 1;
        }
        .dropdown-item {
          margin-bottom: 0.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.25rem;
        }
        select {
          width: 100%;
          padding: 0.25rem;
        }
      `}</style>
    </header>
  );
};

export default Header;