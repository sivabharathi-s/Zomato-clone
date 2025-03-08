import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import RestaurantMenu from './RestaurantMenu';
import Cart from './Cart';
import Favorites from './Favorites';
import Profile from './Profile';
import Login from './Login';
import Signup from './Signup';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';
import { ShopProvider } from './context/ShopContext';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import Admin from './admin/Admin';
import Dashboard from './admin/Dashboard';
import AddShop from './admin/AddShop';
import AdminProfile from './admin/Profile';
import Logout from './Logout';

function App() {
  const isAdminLoggedIn = !!localStorage.getItem('adminToken');

  return (
    <AuthProvider>
      <ShopProvider>
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link className="navbar-brand" to="/">
                  Zomato Clone
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/favorites">
                        Favorites
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">
                        <FaUser />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cart">
                        <FaShoppingCart />
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin-login">
                        Admin Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/logout">
                        Logout
                      </Link>
                    </li>
                    {isAdminLoggedIn && (
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin">
                          Admin
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>

            <div className="container">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<PrivateRoute element={Home} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu/:id" element={<RestaurantMenu />} />
                <Route path="/cart" element={<PrivateRoute element={Cart} />} />
                <Route path="/favorites" element={<PrivateRoute element={Favorites} />} />
                <Route path="/profile" element={<PrivateRoute element={Profile} />} />
                <Route path="/admin-signup" element={<AdminSignup />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin/*" element={<PrivateRoute element={Admin} />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="add-shop" element={<AddShop />} />
                  <Route path="profile" element={<AdminProfile />} />
                </Route>
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </div>

            <footer className="text-center">
              <div className="container">
                <p className="mb-0">
                  &copy; {new Date().getFullYear()} Zomato Clone. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </Router>
      </ShopProvider>
    </AuthProvider>
  );
}

export default App;
