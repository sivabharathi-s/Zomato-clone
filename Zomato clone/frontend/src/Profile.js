import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    photo: 'https://th.bing.com/th/id/OIP.uo_hoPwUzv_ihIlvHstqtwHaK6?w=205&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'SIVA',
    email: 'sivanandh@gmail.com',
    mobile: '9685457525',
    dob: '2004-10-04',
    orders: [
      { id: 1, item: 'Butter Chicken', date: '2025-01-01', price: '₹350' },
      { id: 2, item: 'Paneer Tikka', date: '2025-01-05', price: '₹250' },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <div className="container py-5">
        <h1 className="text-center mb-4">Profile</h1>
        <div className="profile-card">
          <img src={profile.photo} alt="Profile" className="profile-img" />
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="form-control mb-2"
            />
          ) : (
            <h2 className="profile-name">{profile.name}</h2>
          )}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="form-control mb-2"
            />
          ) : (
            <p className="profile-email">{profile.email}</p>
          )}
          {isEditing ? (
            <input
              type="text"
              name="mobile"
              value={profile.mobile}
              onChange={handleChange}
              className="form-control mb-2"
            />
          ) : (
            <p className="profile-mobile">{profile.mobile}</p>
          )}
          {isEditing ? (
            <input
              type="date"
              name="dob"
              value={profile.dob}
              onChange={handleChange}
              className="form-control mb-2"
            />
          ) : (
            <p className="profile-dob">Date of Birth: {profile.dob}</p>
          )}
          <h3 className="mt-4">My Orders</h3>
          <ul className="list-group">
            {profile.orders.map((order) => (
              <li key={order.id} className="list-group-item">
                {order.item} - {order.date} - {order.price}
              </li>
            ))}
          </ul>
          <button className="btn btn-primary mt-4" onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;