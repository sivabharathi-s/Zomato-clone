import React, { useContext, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from './context/ShopContext';
import './Home.css';

function Home() {
  const { shops, setShops, addFavorite } = useContext(ShopContext);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/shops');
        setShops(response.data);
      } catch (error) {
        console.error('There was an error fetching the shops!', error);
      }
    };

    fetchShops();
  }, [setShops]);

  return (
    <section className="restaurant-list py-5">
      <div className="container">
        <h2 className="text-center mb-4">Popular Restaurants</h2>
        <div className="row">
          {shops.map((shop, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img src={shop.photo} className="card-img-top" alt={shop.name} />
                <div className="card-body">
                  <h5 className="card-title">{shop.name}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/menu/${index}`} className="btn btn-primary btn-sm">
                      View Menu
                    </Link>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => addFavorite(shop)}>
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;