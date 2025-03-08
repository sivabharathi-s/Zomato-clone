import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ShopContext } from './context/ShopContext';
import './Favorites.css';

function Favorites() {
  const { favorites, setFavorites } = useContext(ShopContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/favorites');
        setFavorites(response.data);
      } catch (error) {
        console.error('There was an error fetching the favorites!', error);
      }
    };

    fetchFavorites();
  }, [setFavorites]);

  return (
    <section className="favorites-list py-5">
      <div className="container">
        <h2 className="text-center mb-4">Favorite Restaurants</h2>
        <div className="row">
          {favorites.map((fav, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={fav.photo} className="card-img-top" alt={fav.name} />
                <div className="card-body">
                  <h5 className="card-title">{fav.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Favorites;
