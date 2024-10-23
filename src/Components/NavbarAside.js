import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarAside.css'; // Common CSS for both Navbar and Aside

const NavbarAside = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="navbar">
        <div className="back-arrow">
          <i className="bi bi-justify"></i>
        </div>
        <div className="brand">
          <h1>Matryx Medisys</h1>
          <span>Medical Excellence</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="submit">&#128269;</button>
        </div>
        <div className="icons">
          <span className="icon">
            <i className="bi bi-envelope"></i>
          </span>
          <span className="icon">
            <i className="bi bi-bell"></i>
          </span>
          <span className="icon">
            <i className="bi bi-person"></i>
          </span>
        </div>
        
      </div>

      {/* Aside Section */}
      <div className="aside-container">
        <ul className="aside-menu">
          <li><span class="icon"><i class="bi bi-grid-1x2-fill"></i></span> <Link to="/dashboard">Dashboard</Link></li>
          <li> <span class="icon"><i class="bi bi-cart3"></i></span><Link to="/Product">Product</Link></li>
          <li><span class="icon"><i class="bi bi-filter-square-fill"></i></span><Link to="/CaseCreation">CaseCreation</Link></li>
          <li> <span class="icon"><i class="bi bi-journal-bookmark-fill"></i></span><Link to="/Categories">Categories</Link></li>
          <li> <span class="icon"><i class="bi bi-buildings-fill"></i></span><Link to="/departments">Departments</Link></li>
          <li> <span class="icon"><i class="bi bi-people-fill"></i></span><Link to="/Doctors">Doctors</Link></li>
          <li><span class="icon"><i class="bi bi-plus-square-fill"></i></span><Link to="/HospitalForm">Hospitals</Link></li>
          <li><span class="icon"><i class="bi bi-briefcase-fill"></i></span><Link to="/principles">Principles</Link></li>
          <li><span class="icon"><i class="bi bi-person-fill"></i></span><Link to="/SalesEmploye">SalesEmploye</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarAside;
