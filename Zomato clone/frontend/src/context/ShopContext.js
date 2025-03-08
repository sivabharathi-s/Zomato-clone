import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shops, setShops] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addShop = (shop) => {
    setShops((prevShops) => [...prevShops, shop]);
  };

  const addFavorite = async (shop) => {
    try {
      const response = await axios.post('http://localhost:3001/api/favorites', shop);
      setFavorites((prevFavorites) => [...prevFavorites, response.data]);
    } catch (error) {
      console.error('There was an error adding the favorite!', error);
    }
  };

  return (
    <ShopContext.Provider value={{ shops, addShop, setShops, favorites, addFavorite }}>
      {children}
    </ShopContext.Provider>
  );
};