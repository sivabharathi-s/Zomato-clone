import React, { useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import './Admin.css';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
    }
  }, [navigate]);

  return (
    <div className="admin-container">
      <nav className="admin-nav">
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/add-shop">Add Shop</Link></li>
          <li><Link to="/admin/profile">Profile</Link></li>
          <li><Link to="/admin/logout">Logout</Link></li>
        </ul>
      </nav>
      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
