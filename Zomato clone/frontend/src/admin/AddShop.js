import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import './AddShop.css';

function AddShop() {
  const [shopData, setShopData] = useState({
    name: '',
    photo: '',
  });
  const { addShop } = useContext(ShopContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopData({
      ...shopData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/shops', shopData);
      addShop(response.data);
      setShopData({ name: '', photo: '' });
      alert('Shop added successfully!');
    } catch (error) {
      console.error('There was an error adding the shop!', error);
    }
  };

  return (
    <div className="add-shop-container">
      <h2>Add Shop</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Shop Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shopData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo URL:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={shopData.photo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Shop</button>
      </form>
    </div>
  );
}

export default AddShop;