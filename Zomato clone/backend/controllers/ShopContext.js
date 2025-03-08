import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [shops, setShops] = useState([]);

  const addShop = (shop) => {
    setShops((prevShops) => [...prevShops, shop]);
  };

  return (
    <ShopContext.Provider value={{ shops, addShop, setShops }}>
      {children}
    </ShopContext.Provider>
  );
};