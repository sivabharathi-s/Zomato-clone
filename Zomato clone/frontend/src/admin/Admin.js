import React, { useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import './AdminPanel.css';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-signin');
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
      <Outlet />
    </div>
  );
}

export default Admin;